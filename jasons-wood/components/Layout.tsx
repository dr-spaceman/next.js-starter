/* eslint-disable prefer-template */
import React, { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import {
  BiArrowToTop as ArrowTopIcon,
  BiMenu as MenuIcon,
} from 'react-icons/bi'
import { SkipNavLink, SkipNavContent } from '@reach/skip-nav'
import '@reach/skip-nav/styles.css'

import IconButton from './IconButton'
import scrollToTop from 'lib/scroll-to-top'
import useMediaQuery from 'lib/use-media-query'

export const SITE_TITLE = "Jason's Wood"

// Used to build site navigation
const PAGES = [
  { link: '/', title: 'Home' },
  { link: '/wood', title: 'My Wood' },
  { link: '/cutting-boards', title: 'Cutting Boards' },
  { link: '/custom', title: 'Custom Order' },
  { link: '/about', title: 'About' },
]

export default function Layout({ title = SITE_TITLE, children }) {
  const { pathname, query } = useRouter()
  const pathnameRoot = pathname.split('/', 2).join('/')

  const isScreenMobile = useMediaQuery('(max-width: 680px)')

  const currentPageIndex = PAGES.findIndex(page => page.link === pathnameRoot)
  const isCurrentPage = (link: string) => link === pathnameRoot

  const [menu, setMenu] = useState(false)
  const handleOpenMenu = () => setMenu(!menu)

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="preconnect"
          href="https://fonts.googleapis.com"
          crossOrigin="true"
        />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            SITE_TITLE
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={SITE_TITLE} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <SkipNavLink />
      <header id="top">
        <div className="heading">
          <h1>{SITE_TITLE}</h1>
          {isScreenMobile && (
            <IconButton onClick={handleOpenMenu}>
              <MenuIcon />
            </IconButton>
          )}
        </div>
        <nav
          style={
            {
              display: menu ? 'block' : 'none',
              '--current-index': currentPageIndex,
            } as React.CSSProperties
          }
          aria-label="Main"
        >
          <ul>
            {PAGES.map(({ link, title: pageTitle }) => (
              <li
                key={link}
                className={isCurrentPage(link) ? 'current' : undefined}
              >
                <Link href={link}>{pageTitle}</Link>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <SkipNavContent />
      <main>{children}</main>
      <footer>
        <nav aria-label="Footer">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
            <li>
              <a href="/">Instagram</a>
            </li>
          </ul>
        </nav>
        <IconButton id="scroll-top" onClick={scrollToTop}>
          <ArrowTopIcon />
        </IconButton>
      </footer>
    </>
  )
}
