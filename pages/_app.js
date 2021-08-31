import '../styles/globals.css'
import Head from 'next/head'

import Footer from '../utils/footer'

export default function render({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/tailwindcss/2.2.0/tailwind.min.css" />
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:description" content="Hello, my name is Flamex. I'm a german fullstack developer" />
        <meta property="og:title" content="Flamex" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Flamex | Fullstack developer" />
        <meta property="og:image" content="https://avatars.githubusercontent.com/u/68353308?v=4" />
        <meta property="og:url" content="https://flamex.dev" />
        <meta name="theme-color" content="#f07171" />
      </Head>
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  )
}