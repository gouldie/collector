import { useRouter } from 'next/router'
import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import SetHeader from 'components/SetHeader'
import CardList from 'components/CardList'
// import validSets from 'utils/validSets'
import sortBy from 'utils/sort'

export default function Set() {
  const router = useRouter()
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('no')
  const { set } = router.query

  // This is only used if using 'npm start', not 'npm run export'
  // if (!validSets.includes(set)) {
  //   return (
  //     <Text.Block style={{ textAlign: 'center' }}>
  //       Set not found
  //     </Text.Block>
  //   )
  // }

  const setData = require('../../data/sets/' + set).default || {}

  const filteredCards = setData.cards.filter(e =>
    e.name.toLowerCase().includes(filter.toLowerCase())
  )
  const sortedCards = filteredCards.sort(sortBy[sort])

  return (
    <Box>
      <SetHeader
        setName={setData.name}
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />

      <CardList cards={sortedCards} />
    </Box>
  )
}

export { getServerSideProps } from '../Chakra'
