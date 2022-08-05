import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <title>{process.env.NEXT_PUBLIC_APP_TITLE || process.env.NEXT_PUBLIC_APP_NAME || "perpustakaan"}</title>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}