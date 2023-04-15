import { useBlogContext } from 'nextra-theme-blog'

const YEAR = new Date().getFullYear()

export default {
  head: () => {
    const meta = {
      title: 'Irfan Ismail',
      description:
        'I am a software engineer, with a passion for building libraries and dev tools.',
      image: 'https://avatars.githubusercontent.com/u/23192852?v=4'
    }
    const {
      opts: { frontMatter }
    } = useBlogContext()

    return (
      <>
        {/* General */}
        <meta name="title" content={frontMatter.title ?? meta.title} />
        <meta
          name="description"
          content={frontMatter.description ?? meta.description}
        />
        {/* FB OpenGraph */}
        <meta property="og:title" content={frontMatter.title ?? meta.title} />
        <meta
          property="og:description"
          content={frontMatter.description ?? meta.description}
        />
        <meta property="og:image" content={frontMatter.image ?? meta.image} />
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@irfanismail96" />
        <meta name="twitter:title" content={frontMatter.title ?? meta.title} />
        <meta
          name="twitter:description"
          content={frontMatter.description ?? meta.description}
        />
        <meta name="twitter:image" content={frontMatter.image ?? meta.image} />
      </>
    )
  },
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <time>{YEAR}</time> © Irfan Ismail.
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
  //   useNextSeoProps() {
  //     const { frontMatter } = useConfig()
  //     console.log(frontMatter)
  //     return {
  //       additionalLinkTags: [
  //         {
  //           href: '/apple-icon-180x180.png',
  //           rel: 'apple-touch-icon',
  //           sizes: '180x180'
  //         },
  //         {
  //           href: '/android-icon-192x192.png',
  //           rel: 'icon',
  //           sizes: '192x192',
  //           type: 'image/png'
  //         },
  //         {
  //           href: '/favicon-96x96.png',
  //           rel: 'icon',
  //           sizes: '96x96',
  //           type: 'image/png'
  //         },
  //         {
  //           href: '/favicon-32x32.png',
  //           rel: 'icon',
  //           sizes: '32x32',
  //           type: 'image/png'
  //         },
  //         {
  //           href: '/favicon-16x16.png',
  //           rel: 'icon',
  //           sizes: '16x16',
  //           type: 'image/png'
  //         }
  //       ],
  //       additionalMetaTags: [
  //         { content: 'en', httpEquiv: 'Content-Language' },
  //         { content: 'Nextra', name: 'apple-mobile-web-app-title' },
  //         { content: '#fff', name: 'msapplication-TileColor' },
  //         { content: '/ms-icon-144x144.png', name: 'msapplication-TileImage' }
  //       ],
  //       description:
  //         frontMatter.description || 'Nextra: the Next.js site builder',
  //       openGraph: {
  //         images: [
  //           { url: frontMatter.image || 'https://nextra.vercel.app/og.png' }
  //         ]
  //       },
  //       titleTemplate: '%s – Nextra',
  //       twitter: {
  //         cardType: 'summary_large_image',
  //         site: 'https://nextra.vercel.app'
  //       }
  //     }
  //   }
}
