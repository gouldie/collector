import { forwardRef } from 'react'
import { applyTheme, Box, Image } from 'bumbag'

const CustomBox = applyTheme(Box, {
  styles: {
    base: {
      cursor: 'pointer',
      borderRadius: '5px',
      ':hover': {
        boxShadow: '0 0 5px #ddd'
      }
    }
  }
})

function Card ({ name, image, onClick }, ref) {
  return (
    <CustomBox ref={ref} onClick={() => onClick(image)}>
      <Image src={image} alt='Pokemon' style={{ width: '100%', display: 'block' }} />
    </CustomBox>
  )
}

export default forwardRef(Card)
