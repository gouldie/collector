import { Box, Heading, useMediaQuery } from '@chakra-ui/react'
import SearchBar from 'components/SearchBar'
import Select from 'components/Select'

export default function SetHeader({ setName, filter, setFilter, sort, setSort }) {
  const [isDesktop] = useMediaQuery('(min-width: 1000px)')

  return (
    <Box
      style={{
        marginBottom: '20px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: isDesktop ? 'center' : 'flex-start',
        flexDirection: isDesktop ? 'row' : 'column'
      }}
    >
      <Heading use='h5' style={{ marginBottom: !isDesktop && '20px' }}>
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
