import { Box, Heading, Progress, Text } from '@chakra-ui/react'
import seriesData from 'data/series'
import useCollected from 'hooks/useCollected'
import ClientOnly from 'utils/clientOnly'

export default function Home() {
  const { collected } = useCollected()

  return (
    <Box>
      <Heading use='h5' mt='10px' mb='20px'>
        My progress
      </Heading>

      <ClientOnly>
        {seriesData.map(series => (
          <Box key={series.title}>
            <Text fontSize='lg' mb='16px'>
              {series.title}
            </Text>

            {series.sets.map(set => (
              <Box key={set.name} mb='6px'>
                <Text fontSize='sm' width='150px' mb='5px'>
                  {set.name}
                </Text>

                <Progress
                  hasStripe
                  value={
                    (Object.values(collected[set.id]).filter(Boolean).length /
                      Object.keys(set.cards).length) *
                    100
                  }
                  width='150px'
                />
              </Box>
            ))}
          </Box>
        ))}
      </ClientOnly>
    </Box>
  )
}

export { getServerSideProps } from './Chakra'
