import { ThemeProvider } from 'next-themes'
import Head from 'next/head'

import siteMetadata from '@/data/siteMetadata'
import LayoutWrapper from '@/components/LayoutWrapper'
import { ClientReload } from '@/components/ClientReload'
import { Analytics } from '@vercel/analytics/react'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
      </Head>
      <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
        {typeof window !== 'undefined' && process.env.NODE_ENV === 'development' && process.env.SOCKET && (
          <ClientReload />
        )}
        <Analytics />
        <div>
          <LayoutWrapper>
            <Component {...pageProps} />
          </LayoutWrapper>
        </div>
      </ThemeProvider>
    </>
  )
}

export default MyApp
