import { useRouter } from 'next/router'
import { useState } from 'react'
import { Box } from '@chakra-ui/react'
import SetHeader from 'components/SetHeader'
import CardList from 'components/CardList'
import ClientOnly from 'utils/clientOnly'
// import validSets from 'utils/validSets'

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

  return (
    <Box>
      <SetHeader
        setName={setData.name}
        filter={filter}
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
