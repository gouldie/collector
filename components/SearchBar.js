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
      height: '2.75em'
    }
  }
})

export default function SearchBar () {
  return (
    <CustomBox>
      <FancyInput
        before={<Input.Icon icon='solid-search' />}
        placeholder='Search'
      />
    </CustomBox>
  )
}
