import { useState } from 'react'
import { SideNav, PageWithSidebar, usePage } from 'bumbag'
import { useRouter } from 'next/router'
import SearchBar from 'components/SearchBar'
import SidebarIcons from 'components/SidebarIcons'
import data from 'data/series'
import ClientOnly from 'utils/clientOnly'

export default function Sidebar({ children, isDesktop }) {
  const router = useRouter()
  const { sidebar } = usePage()
  const [filter, setFilter] = useState('')

  const filteredData = data.reduce((accumulator, currentValue) => {
    const filteredSets = currentValue.sets.filter(set =>
      set.name.toLowerCase().includes(filter.toLowerCase())
    )

    if (filteredSets.length > 0) {
      accumulator.push({
        ...currentValue,
        sets: filteredSets
      })
    }

    return accumulator
  }, [])

  return (
    <PageWithSidebar
      collapsedSidebarWidth='260px'
      sidebar={
        <SideNav selectedId={router.query.set || '/'}>
          {!isDesktop && (
            <ClientOnly>
              <SidebarIcons />
            </ClientOnly>
          )}

          {isDesktop && <SearchBar filter={filter} setFilter={setFilter} />}

          <SideNav.Level>
            <SideNav.Item
              navId='/'
              onClick={() => {
                router.push('/').then(() => {
                  if (!isDesktop) sidebar.toggle()
                })
              }}
            >
              Home
            </SideNav.Item>
          </SideNav.Level>

          {filteredData.map(series => (
            <SideNav.Level key={series.title} title={series.title}>
              {series.sets.map(set => (
                <SideNav.Item
                  key={set.id}
                  navId={set.id}
                  onClick={() => {
                    router.push(`/sets/${set.id}`).then(() => {
                      if (!isDesktop) sidebar.toggle()
                    })
                  }}
                >
                  {set.name}
                </SideNav.Item>
              ))}
            </SideNav.Level>
          ))}
        </SideNav>
      }
    >
      {children}
    </PageWithSidebar>
  )
}
