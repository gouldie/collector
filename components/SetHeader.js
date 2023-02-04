import { Box, Heading, Image, Text, useColorMode } from '@chakra-ui/react'
import { S3_URL } from '@globals'
import SearchBar from 'components/SearchBar'
import Select from 'components/Select'

function Tag({ tag, sx = {} }) {
  const { colorMode } = useColorMode()

  return (
    <Text
      sx={{
        backgroundColor: colorMode === 'dark' ? '#374151' : '#d1d5db',
        fontWeight: 500,
        fontSize: '0.875rem',
        lineHeight: '1.25rem',
        py: '0.125rem',
        px: '0.625rem',
        borderRadius: '0.25rem',
        ...sx
      }}
    >
      {tag}
    </Text>
  )
}

export default function SetHeader({ isDesktop, setData, filter, setFilter, sort, setSort }) {
  const { name, image, released, cards } = setData

  return (
    <>
      <Box
        mb='20px'
        pb='1rem'
        display='flex'
        justifyContent='space-between'
        alignItems={isDesktop ? 'center' : 'flex-start'}
        flexDirection={isDesktop ? 'row' : 'column'}
      >
        <Box display='flex' alignItems='center' mb={!isDesktop && '20px'}>
          <Image src={`${S3_URL}/logos/${image}`} alt='Pokemon' style={{ maxHeight: '40px' }} />

          <Heading as='h1' size='lg' sx={{ ml: '25px' }}>
            {name}
          </Heading>
        </Box>

        <Box display='flex' alignItems='center'>
          <Select
            sort={sort}
            setSort={setSort}
            options={[
              { label: 'Card no.', value: 'no' },
              { label: 'Name', value: 'name' }
            ]}
          />

          <SearchBar filter={filter} setFilter={setFilter} />
        </Box>
      </Box>

      <Box display='flex' mb='20px'>
        <Tag tag={`Cards: ${Object.keys(cards).length}`} sx={{ mr: '20px' }} />
        <Tag tag={`Released: ${released}`} />
      </Box>
    </>
  )
}
