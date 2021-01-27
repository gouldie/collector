import { applyTheme, Icon, usePage } from 'bumbag'

const CustomHamburger = applyTheme(Icon, {
  styles: {
    base: {
      cursor: 'pointer',
      fontSize: '1.3rem'
    }
  }
})

export default function Hamburger () {
  const { sidebar } = usePage()

  return (
    <CustomHamburger
      icon='solid-bars'
      onClick={sidebar.toggle}
    />
  )
}
