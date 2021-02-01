import { applyTheme, Box, Input } from 'bumbag'

const CustomBox = applyTheme(Box, {
  styles: {
    base: {
      fontSize: '0.875rem',
      padding: '1rem'
    }
  }
})

const FancyInput = applyTheme(Input, {
  styles: {
    base: {
      fontSize: '0.875rem',
      height: '2.4rem'
    }
  }
})

export default function SearchBar ({ filter, setFilter, boxStyle }) {
  return (
    <CustomBox style={boxStyle}>
      <FancyInput
        before={<Input.Icon icon='solid-search' />}
        placeholder='Search'
        value={filter}
        role='searchbox'
        onChange={e => setFilter(e.target.value)}
      />
    </CustomBox>
  )
}
