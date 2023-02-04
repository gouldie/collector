import { Select as ChakraSelect } from '@chakra-ui/react'

function Select({ sort, setSort, options }) {
  return (
    <ChakraSelect
      size='sm'
      value={sort}
      onChange={e => setSort(e.target.value)}
      minWidth='110px'
      borderRadius='5px'
    >
      {options.map(option => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </ChakraSelect>
  )
}

export default Select
