import { SideNav, PageWithSidebar, Box, useBreakpoint } from 'bumbag'
import SearchBar from '../components/SearchBar'
import { useRouter } from 'next/router'
import data from '../data/sets'
import ColorModeIcon from '../components/icons/ColorMode'

export default function Sidebar () {
  const router = useRouter()
  const isDesktop = useBreakpoint('min-widescreen')

  return (
    <PageWithSidebar collapsedSidebarWidth='260px' sidebar={
      <SideNav selectedId={router.query.set || '/'}>
        {!isDesktop && <Box style={{ padding: '1rem 1.2rem 0' }}>
          <ColorModeIcon />
        </Box>}

        <SearchBar />

        <SideNav.Level>
          <SideNav.Item navId='/' onClick={() => { router.push('/') }}>Home</SideNav.Item>
        </SideNav.Level>

        {
          data.map(series => (
            <SideNav.Level key={series.title} title={series.title}>
              {
                series.sets.map(set => (
                  <SideNav.Item key={set.id} navId={set.id} onClick={() => { router.push(`/sets/${set.id}`) }}>{set.name}</SideNav.Item>
                ))
              }
            </SideNav.Level>
          ))
        }
      </SideNav>
    }>

    </PageWithSidebar>

  )
}
