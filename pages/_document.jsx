import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  async function getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)

    return { ...initialProps }
  }
  return (
    <Html lang="en">
      <Head>
        <link
          rel="preload"
          href="/Fonts/Founders_Grotesk/Founders_Grotesk_Light_300.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/Fonts/Founders_Grotesk/Founders_Grotesk_400.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/Fonts/Founders_Grotesk/Founders_Grotesk_Medium_500.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/Fonts/Founders_Grotesk/Founders_Grotesk_SmB_600.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/Fonts/Founders_Grotesk/Founders_Grotesk_Bold_700.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
