import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const meta = {
    title: 'Irfan Ismail',
    description:
      'I am a software engineer, with a passion for building libraries and dev tools.',
    image: 'https://avatars.githubusercontent.com/u/23192852?v=4'
  }

  return (
    <Html lang="en">
      <Head>
        <meta name="robots" content="follow, index" />
        <meta property="og:site_name" content={meta.title} />

        {/* <meta name="description" content={meta.description} /> */}
        {/* <meta property="og:description" content={meta.description} /> */}
        {/* <meta property="og:title" content={meta.title} /> */}
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@irfanismail96" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
