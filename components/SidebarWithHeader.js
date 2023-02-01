import React, { useState } from 'react'
import {
  IconButton,
  Box,
  CloseButton,
  Flex,
  HStack,
  useColorModeValue,
  Drawer,
  DrawerContent,
  Text,
  useDisclosure
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
import ColorModeIcon from 'components/icons/ColorMode'
import data from 'data/series'
import { useRouter } from 'next/router'
import SearchBar from 'components/SearchBar'
import ClientOnly from 'utils/clientOnly'
import Link from 'next/link'

export default function SidebarWithHeader({ children }) {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH='100vh'>
      <SidebarContent onClose={() => onClose} display={{ base: 'none', md: 'block' }} />
      <Drawer
        autoFocus={false}
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size='full'
      >
        <DrawerContent>
          <SidebarContent onClose={onClose} />
        </DrawerContent>
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
      <Box ml={{ base: 0, md: 60 }} p='4'>
        {children}
      </Box>
    </Box>
  )
}

const SidebarContent = ({ onClose, ...rest }) => {
  const router = useRouter()
  const [filter, setFilter] = useState('')

  const filteredData = data.reduce((accumulator, currentValue) => {
    const filteredSets = currentValue.sets.filter(set =>
      set.name.toLowerCase().includes(filter.toLowerCase())
    )

    if (filteredSets.length > 0) {
      accumulator.push({
        ...currentValue,
        sets: filteredSets
      })
    }

    return accumulator
  }, [])

  return (
    <Box
      transition='3s ease'
      borderRight='1px'
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos='fixed'
      h='full'
      {...rest}
    >
      <Flex h='20' alignItems='center' mx='8' justifyContent='space-between'>
        <Text fontSize='2xl' fontFamily='monospace' fontWeight='bold'>
          Collector
        </Text>
        <CloseButton display={{ base: 'flex', md: 'none' }} onClick={onClose} />
      </Flex>

      <SearchBar filter={filter} setFilter={setFilter} />

      {filteredData.map(series => (
        <Box key={series.title}>
          <NavItem mb='25px' p='0.3rem 1.25rem' isSelected={router.asPath === '/'} href='/'>
            Home
          </NavItem>

          <Text
            fontSize='0.75rem'
            fontWeight='600'
            textTransform='uppercase'
            color={useColorModeValue('#727d90', '#727d90')}
            mb='0.5rem'
            p='0.3rem 1.25rem'
          >
            {series.title}
          </Text>

          {series.sets.map(set => (
            <NavItem
              key={set.id}
              p='0.3rem 1.25rem'
              isSelected={router.asPath === `/sets/${set.id}`}
              href={`/sets/${set.id}`}
            >
              {set.name}
            </NavItem>
          ))}
        </Box>
      ))}
    </Box>
  )
}

const NavItem = ({ isSelected, children, href, ...rest }) => {
  const selectedStyles = {
    color: useColorModeValue('#574feb', '#c1c9d7'),
    backgroundColor: useColorModeValue('#eeedfd', '#262a53'),
    boxShadow: `inset 3px 0 0 0 ${useColorModeValue('#574feb', '#574feb')}`
  }

  return (
    <Link href={href} style={{ textDecoration: 'none' }} _focus={{ boxShadow: 'none' }}>
      <Text
        fontSize='0.875rem'
        cursor='pointer'
        color={useColorModeValue('#474747', '#c1c9d7')}
        _hover={{
          color: useColorModeValue('#574feb', '#8984f1')
        }}
        {...rest}
        sx={{ ...(isSelected ? selectedStyles : {}) }}
      >
        {children}
      </Text>
    </Link>
  )
}

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height='20'
      alignItems='center'
      borderBottomWidth='1px'
      borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant='outline'
        aria-label='open menu'
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize='2xl'
        fontFamily='monospace'
        fontWeight='bold'
      >
        Collector
      </Text>

      <HStack spacing={{ base: '0', md: '6' }} mr='5px'>
        <ClientOnly>
          <ColorModeIcon />
        </ClientOnly>
      </HStack>
    </Flex>
  )
}
