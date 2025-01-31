import { Footer } from 'flowbite-react'
import { Navbar } from 'flowbite-react'
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Script from 'next/script'
import {
  FaDiscord,
  FaGithub,
  FaDiscourse,
  FaVoteYea,
  FaBookOpen,
} from 'react-icons/fa'
import Icon from '../public/icon.svg'
import Announcement from './Announcement'
import UniversalLink from './UniversalLink'

const NavigationItem = ({ children, href, currentPath }) => {
  return (
    <UniversalLink
      href={href}
      className={`cursor-pointer transition hover:scale-95 ${
        currentPath === href.split('#')[0]
          ? 'bg-gradient-to-r from-n3blue to-n3green bg-clip-text text-transparent'
          : ''
      }`}
    >
      {children}
    </UniversalLink>
  )
}

const FooterItem = ({ icon, href }) => {
  return (
    <span className="cursor-pointer transition rounded-full hover:scale-95 hover:opacity-80">
      <Footer.Icon href={href} icon={icon} />
    </span>
  )
}

const HomeItem = ({ withText, className }) => {
  return (
    <Link
      href="/"
      passHref
      className={`${className} ${withText && 'flex flex-row gap-2'}`}
    >
      <Image
        src={Icon}
        width={64}
        height={64}
        alt="Nation3 logo"
        className="cursor-pointer transition rounded-full shadow-md hover:scale-95 hover:opacity-80"
      />
      {withText && (
        <span className="self-center whitespace-nowrap text-lg font-light dark:text-white">
          Nation3
        </span>
      )}
    </Link>
  )
}

export default function Layout({ children }) {
  const router = useRouter()
  const path = router.pathname

  return (
    <>
      <div className="container h-full max-w-screen-xl mx-auto px-6 lg:px-8 mt-4">
        <Script src="https://cdn.splitbee.io/sb.js" />
        <div className="relative mb-4 z-10 grid grid-cols-1 place-items-between md:place-items-center">
          <Navbar>
            <HomeItem className="md:hidden" withText={true} />
            <Navbar.Toggle />
            <Navbar.Collapse>
              <div className="grid grid-cols-1 md:grid-cols-5 place-items-end md:place-items-center gap-x-16 gap-y-2 text-2xl md:text-[16px] font-normal dark:text-white">
                <NavigationItem href="/manifesto" currentPath={path}>
                  Manifesto
                </NavigationItem>
                <NavigationItem href="/jurisdiction" currentPath={path}>
                  Jurisdiction
                </NavigationItem>
                <HomeItem className="hidden md:block" />
                <NavigationItem href="https://app.nation3.org">
                  Citizen app
                </NavigationItem>
                <NavigationItem href="https://docs.nation3.org">
                  Docs
                </NavigationItem>
              </div>
            </Navbar.Collapse>
          </Navbar>
        </div>
        {children}
        <footer className="py-6 mt-16 flex justify-between max-w-screen-lg mx-auto">
          <div className="w-full">
            <div className="w-full flex items-center justify-center gap-16">
              <div className="mt-4 flex space-x-6 mt-0 justify-center">
                <FooterItem href="https://discord.gg/nation3-690584551239581708" icon={FaDiscord} />
                <FooterItem
                  href="https://forum.nation3.org"
                  icon={FaDiscourse}
                />
              </div>
              <div className="relative w-8 h-8">
                <Link href="/" passHref>
                  <Image
                    src="/icon-plain.svg"
                    fill={true}
                    alt="Nation3 icon"
                    className="cursor-pointer transition rounded-full shadow-md hover:scale-95 hover:opacity-80"
                  />
                </Link>
              </div>
              <div className="mt-4 flex space-x-6 mt-0 justify-center">
                {/*<FooterItem href="https://gov.nation3.org" icon={FaVoteYea} />*/}
                <FooterItem href="https://github.com/nation3" icon={FaGithub} />
                <FooterItem href="https://docs.nation3.org" icon={FaBookOpen} />
              </div>
            </div>
          </div>
        </footer>
      </div>
      <Announcement />
    </>
  )
}
