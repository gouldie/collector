import { Box, Heading, useMediaQuery } from '@chakra-ui/react'
import SearchBar from 'components/SearchBar'
import Select from 'components/Select'

export default function SetHeader({ setName, filter, setFilter, sort, setSort }) {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  return (
    <Box
      style={{
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: isLargerThan800 ? 'center' : 'flex-start',
        flexDirection: isLargerThan800 ? 'row' : 'column'
      }}
    >
      <Heading use='h5' style={{ marginBottom: !isLargerThan800 && '20px' }}>
        {setName}
      </Heading>

      <Box display='flex' alignItems='center'>
        <Select
          sort={sort}
          setSort={setSort}
          options={[
            { label: 'Card no.', value: 'no' },
            { label: 'Name', value: 'name' }
          ]}
        />

        <SearchBar
          boxStyle={{ padding: 0, marginLeft: '20px' }}
          filter={filter}
          setFilter={setFilter}
        />
      </Box>
    </Box>
  )
}
