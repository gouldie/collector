import { ColorModeScript } from '@chakra-ui/react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='icon' href='/favicon.ico' />
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
