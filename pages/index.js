import Image from 'next/image'
import { Box, Progress, Text } from '@chakra-ui/react'
import seriesData from 'data/series'
import useCollected from 'hooks/useCollected'
import ClientOnly from 'utils/clientOnly'
import logoBaseSet from 'public/logos/base-set.png'
import logoJungle from 'public/logos/jungle.png'
import logoFossil from 'public/logos/fossil.png'
import logoGymHeroes from 'public/logos/gym-heroes.png'
import logoGymChallenge from 'public/logos/gym-challenge.png'

const logos = {
  'base-set': logoBaseSet,
  jungle: logoJungle,
  fossil: logoFossil,
  'gym-heroes': logoGymHeroes,
  'gym-challenge': logoGymChallenge
}

export default function Home() {
  const { collected } = useCollected()

  return (
    <Box pt='50px'>
      <Text mb='40px'>
        Welcome to Collector, a tool to help you track your Pokemon trading card collection.
      </Text>

      <ClientOnly>
        <Box display='flex' flexWrap='wrap'>
          {seriesData.map(series => (
            <Box key={series.title} p='20px'>
              <Text fontSize='lg' mb='16px'>
                {series.title}
              </Text>

              {series.sets.map(set => {
                const totalCards = Object.keys(set.cards).length
                const collectedCards = Object.values(collected[set.id] || {}).filter(Boolean).length

                return (
                  <Box key={set.name} mb='6px'>
                    <Box display='flex' alignItems='center' mb='5px'>
                      <Image
                        src={logos[set.id]}
                        alt={`${set.name} set logo`}
                        style={{ width: '25px', marginRight: '10px' }}
                      />

                      <Text fontSize='sm' width='150px'>
                        {set.name}
                      </Text>
                    </Box>

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
        </Box>
      </ClientOnly>
    </Box>
  )
}

export { getServerSideProps } from './Chakra'
