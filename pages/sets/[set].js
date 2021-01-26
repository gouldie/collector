import { Box } from 'bumbag'
import { useRouter } from 'next/router'

export default function Set () {
  const router = useRouter()

  const { set } = router.query

  return (
    <Box>
      <div>{set}</div>
    </Box>
  )
}
