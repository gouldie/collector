import { useRouter } from 'next/router'
import { useState } from 'react'
import { Box } from 'bumbag'
import SetHeader from 'components/SetHeader'
import CardList from 'components/CardList'
import validSets from 'utils/validSets'
import sortBy from 'utils/sort'

export default function Set () {
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

  const sortedCards = setData.cards.sort(sortBy[sort])

  return (
    <Box>
      <SetHeader
        setName={setData.name}
        filter={filter}
        setFilter={setFilter}
        sort={sort}
        setSort={setSort}
      />
      <CardList cards={sortedCards} filter={filter} />
    </Box>
  )
}

export async function getStaticPaths () {
  return {
    paths: validSets.map(set => (
      { params: { set } }
    )),
    fallback: false
  }
}

export async function getStaticProps () {
  return { props: {} }
}
