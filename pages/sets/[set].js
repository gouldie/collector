import { useRouter } from 'next/router'
import { useState } from 'react'
import { Box, Text } from '@chakra-ui/react'
import SetHeader from 'components/SetHeader'
import CardList from 'components/CardList'
import ClientOnly from 'utils/clientOnly'
import validSets from 'utils/validSets'

export default function Set({ isDesktop }) {
  const router = useRouter()
  const [filter, setFilter] = useState('')
  const [sort, setSort] = useState('no')
  const { set } = router.query

  // This is only used if using 'npm start' (SSR), not 'npm run export' (pre-rendering)
  if (!validSets.includes(set)) {
    return <Text style={{ textAlign: 'center' }}>Set not found</Text>
  }

  const setData = require('../../data/sets/' + set).default || {}

  return (
    <Box>
      <SetHeader
        setData={setData}
        filter={filter}
        isDesktop={isDesktop}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />
      <ClientOnly>
        <CardList key={set} set={set} cards={setData.cards} filter={filter} sort={sort} />
      </ClientOnly>
    </Box>
  )
}

export { getServerSideProps } from '../Chakra'
