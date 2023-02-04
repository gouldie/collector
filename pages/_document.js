import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
          <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
          <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
          <link rel='manifest' href='/site.webmanifest' />
          <link rel='mask-icon' href='/safari-pinned-tab.svg' color='#5bbad5' />
          <meta name='msapplication-TileColor' content='#00aba9' />
          <meta name='theme-color' content='#ffffff' />

          <link
            rel='preload'
            as='image'
            href='https://s3.eu-west-2.amazonaws.com/mg.collector/logos/fossil.png'
          />
          <link
            rel='preload'
            as='image'
            href='https://s3.eu-west-2.amazonaws.com/mg.collector/logos/jungle.png'
          />
          <link
            rel='preload'
            as='image'
            href='https://s3.eu-west-2.amazonaws.com/mg.collector/logos/base-set.png'
          />
        </Head>

        <body>
          {/* 👇 Here's the script */}
          <ColorModeScript initialColorMode='system' />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
