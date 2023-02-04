import { Box, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'

export default function SearchBar({ filter, setFilter }) {
  return (
    <Box pl='1rem'>
      <InputGroup size='sm'>
        <InputLeftElement pointerEvents='none'>
          <FiSearch />
        </InputLeftElement>

        <Input
          size='sm'
          fontSize='0.875rem'
          borderRadius='5px'
          placeholder='Search'
          value={filter}
          role='searchbox'
          onChange={e => setFilter(e.target.value)}
        />
      </InputGroup>
    </Box>
  )
}
