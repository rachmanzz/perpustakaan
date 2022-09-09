import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ReactElement, ReactNode } from 'react'
import { NextPage } from 'next'
import Head from 'next/head'
import WrapperProvider from '../components/providers/WrapperProvider'

export type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return (
    <>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_TITLE || process.env.NEXT_PUBLIC_APP_NAME || "perpustakaan"}</title>
      </Head>
      <WrapperProvider>
        {getLayout(<Component {...pageProps} />)}
      </WrapperProvider>
    </>
  )
}
export default MyApp
