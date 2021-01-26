import { SideNav, PageWithSidebar } from 'bumbag'
import SearchBar from '../components/SearchBar'
import { useRouter } from 'next/router'
import data from '../data/sets'

export default function Sidebar () {
  const router = useRouter()

  return (
    <PageWithSidebar sidebar={
      <SideNav selectedId={router.query.set || '/'}>
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
