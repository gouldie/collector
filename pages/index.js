import { Box, Heading, Progress, Text } from '@chakra-ui/react'
import seriesData from 'data/series'
import useCollected from 'hooks/useCollected'
import ClientOnly from 'utils/clientOnly'

export default function Home() {
  const { collected } = useCollected()

  return (
    <Box>
      <Heading use='h5' mt='10px' mb='20px'>
        Home
      </Heading>

      <ClientOnly>
        {seriesData.map(series => (
          <Box key={series.title}>
            <Text fontSize='lg' mb='16px'>
              {series.title}
            </Text>

            {series.sets.map(set => {
              const totalCards = Object.keys(set.cards).length
              const collectedCards = Object.values(collected[set.id]).filter(Boolean).length

              return (
                <Box key={set.name} mb='6px'>
                  <Text fontSize='sm' width='150px' mb='5px'>
                    {set.name}
                  </Text>

                  <Box display='flex' alignItems='center'>
                    <Progress
                      hasStripe
                      value={(collectedCards / totalCards) * 100}
                      width='150px'
                      mr='10px'
                    />

                    <Text fontSize='sm' position='relative' top='-2px'>
                      {collectedCards}/{totalCards}
                    </Text>
                  </Box>
                </Box>
              )
            })}
          </Box>
        ))}
      </ClientOnly>
    </Box>
  )
}

export { getServerSideProps } from './Chakra'
