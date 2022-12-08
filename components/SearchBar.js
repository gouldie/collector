import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'

export default function SearchBar({ filter, setFilter, boxStyle }) {
  return (
    <Box padding='1rem'>
      <InputGroup>
        <InputLeftElement pointerEvents='none'>
          <FiSearch />
        </InputLeftElement>
        <Input
          fontSize='0.875rem'
          height='2.4rem'
          before={<p>test</p>}
          placeholder='Search'
          value={filter}
          role='searchbox'
          onChange={e => setFilter(e.target.value)}
        />
      </InputGroup>
    </Box>
  )
}
