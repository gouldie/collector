import { useState } from 'react'
import { SideNav, PageWithSidebar, Box, useBreakpoint } from 'bumbag'
import { useRouter } from 'next/router'
import SearchBar from '../components/SearchBar'
import ColorModeIcon from '../components/icons/ColorMode'
import data from '../data/sets'

export default function Sidebar () {
  const router = useRouter()
  const isDesktop = useBreakpoint('min-widescreen')
  const [filter, setFilter] = useState('')

  const filteredData = data.reduce((accumulator, currentValue) => {
    const filteredSets = currentValue.sets.filter(set => set.name.toLowerCase().includes(filter.toLowerCase()))

    if (filteredSets.length > 0) {
      accumulator.push({
        ...currentValue,
        sets: filteredSets
      })
    }

    return accumulator
  }, [])

  return (
    <PageWithSidebar collapsedSidebarWidth='260px' sidebar={
      <SideNav selectedId={router.query.set || '/'}>
        {!isDesktop && <Box style={{ padding: '1rem 1.2rem 0' }}>
          <ColorModeIcon />
        </Box>}

        <SearchBar filter={filter} setFilter={setFilter} />

        <SideNav.Level>
          <SideNav.Item navId='/' onClick={() => { router.push('/') }}>Home</SideNav.Item>
        </SideNav.Level>

        {
          filteredData.map(series => (
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
