import { Box, Text } from 'bumbag'
import { useRouter } from 'next/router'
import Card from '../../components/Card'
import validSets from '../../utils/validSets'

export default function Set () {
  const router = useRouter()
  const { set } = router.query

  if (!validSets.includes(set)) {
    return (
      <Text.Block style={{ textAlign: 'center' }}>
        Set not found
      </Text.Block>
    )
  }

  const setData = require('../../data/sets/' + set).default || []

  return (
    <Box>
      <div>{set}</div>
      <Box style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
        gridGap: '1rem'
      }}>
        {
          setData.map((card, i) => <Card key={i} {...card} />)
        }
      </Box>
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
