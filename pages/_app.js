import '../styles/tailwind.css'
import '../styles/app.css'
import Layout from '@components/Layout'
import Script from 'next/script'
import Head from 'next/head'
import React, { useEffect } from 'react'
import { isBrowser } from '@lib/helpers'
import { useSiteContext } from '@lib/context'

import * as gtag from '../lib/gtag'
// Console Credits
if (isBrowser) {
  console.groupCollapsed(
    '%c💀 Site Credits  💀',
    'display:block;padding:0.125em 1em;font-family:courier;font-size:14px;font-weight:bold;line-height:2;text-transform:uppercase;background:black;color:white;'
  )
  console.log(
    '%c Designed & Developed by Henry & Bryan  \n– https://www.kubez.ca/',
    'display:block;font-family:courier;font-size:12px;font-weight:bold;line-height:1;color:black;'
  )
  console.groupEnd()
}

const GoogleAnalytics = ({ gtmID = '' }) => {
  return (
    <>
      {/* Global Site Tag (gtag.js) - Google Analytics */}
      <Script
        strategy="beforeInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${gtmID}`}
      />
      <Script
        id="gtag"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${gtmID}', {
              page_path: window.location.pathname,
          });
          `,
        }}
      />
    </>
  )
}

const Site = ({ Component, pageProps, router }) => {
  const { isPageTransition } = useSiteContext()

  const { data } = pageProps
  // console.log("dataaaaaa", data)

  //Handle Google Analytics
  useEffect(() => {
    const handleRouteChange = (url) => {
      gtag.pageview(url)
    }
    router.events.on('routeChangeComplete', handleRouteChange)
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange)
    }
  }, [router.events])

  return (
    <>
      {isPageTransition && (
        <Head>
          <title>Loading...</title>
        </Head>
      )}
      <Component key={router.asPath.split('?')[0]} {...pageProps} />
    </>
  )
}

function MyApp({ Component, pageProps, router }) {
  const { data } = pageProps

  return (
    <Layout site={data?.site} page={data?.page}>
      <GoogleAnalytics gtmID={data?.site?.gtmID} />
      <Site Component={Component} pageProps={pageProps} router={router} />
    </Layout>
  )
}

export default MyApp
