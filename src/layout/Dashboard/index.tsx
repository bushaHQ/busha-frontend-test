import styled from 'styled-components'
import TopNav from '../../containers/TopNav'
import SideBar from '../../containers/SideBar'

interface IProps {
  children: React.ReactNode
}

const DashboardLayout = ({ children }: IProps) => {
  return (
    <Dashboard>
      <TopNav />
      <Content>
        <SideBar />
        {children}
      </Content>
    </Dashboard>
  )
}

export default DashboardLayout

const Dashboard = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  positon: relative;
`

const Content = styled.section`
  display: flex;
  height: 100%;
`
