import { SideNav, PageWithSidebar } from 'bumbag'
import SearchBar from '../components/SearchBar'

export default function Sidebar ({ children }) {
  return (
    <PageWithSidebar sidebar={
      <SideNav defaultSelectedId='home'>
        <SearchBar />

        <SideNav.Level>
          <SideNav.Item href='#' navId='home'>Home</SideNav.Item>
        </SideNav.Level>

        <SideNav.Level title='Base Set Series'>
          <SideNav.Item href='#' navId='base-set'>Base Set</SideNav.Item>
          <SideNav.Item href='#' navId='jungle'>Jungle</SideNav.Item>
          <SideNav.Item href='#' navId='fossil'>Fossil</SideNav.Item>
        </SideNav.Level>
      </SideNav>
    }>
      {children}
    </PageWithSidebar>
  )
}
