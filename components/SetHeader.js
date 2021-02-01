import { Box, Heading } from 'bumbag'
import SearchBar from 'components/SearchBar'
import Select from 'components/Select'

export default function SetHeader ({ setName, filter, setFilter, sort, setSort }) {
  return (
    <Box style={{
      marginBottom: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between'
    }}>
        <Heading use='h5'>
          {setName}
        </Heading>

        <Box style={{
          display: 'flex'
        }}>
          <Select sort={sort} setSort={setSort} options={[
            { label: 'Card no.', value: 'no' },
            { label: 'Name', value: 'name' }
          ]} />

          <SearchBar boxStyle={{ padding: 0, marginLeft: '20px' }} filter={filter} setFilter={setFilter} />
        </Box>
      </Box>
  )
}
