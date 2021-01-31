import { Box, Heading } from 'bumbag'
import SearchBar from 'components/SearchBar'

export default function SetHeader ({ setName, filter, setFilter }) {
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

        <SearchBar boxStyle={{ padding: 0 }} filter={filter} setFilter={setFilter} />
      </Box>
  )
}
