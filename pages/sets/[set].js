import { useRouter } from 'next/router'
import { useState } from 'react'
import { Box } from 'bumbag'
import SetHeader from 'components/SetHeader'
import SetCardList from 'components/SetCardList'
import validSets from 'utils/validSets'

export default function Set () {
  const router = useRouter()
  const [filter, setFilter] = useState('')
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

  return (
    <Box>
      <SetHeader setName={setData.name} filter={filter} setFilter={setFilter} />
      <SetCardList cards={setData.cards} filter={filter} />
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
