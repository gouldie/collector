import { ChakraProvider, cookieStorageManagerSSR, localStorageManager } from '@chakra-ui/react'

export default function Chakra({ cookies, children }) {
  const colorModeManager =
    typeof cookies === 'string' ? cookieStorageManagerSSR(cookies) : localStorageManager

  return <ChakraProvider colorModeManager={colorModeManager}>{children}</ChakraProvider>
}

export function getServerSideProps({ req }) {
  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? ''
    }
  }
}
