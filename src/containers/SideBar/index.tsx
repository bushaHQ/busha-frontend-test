import styled from 'styled-components'
import { colors, weights } from '../../styles/common'

const SideBarContainer = styled.nav`
  display: flex;
  background-color: ${colors.white};
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.05);
  padding: 60px 0 60px 160px;
  min-height: 100%;
`

const LinksContainer = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`

const LinkItem = styled.li`
  margin-bottom: 16px;
  width: 24rem;
  display:flex;
`

const Link = styled.a`
  font-size: 1rem;
  font-weight: 400;
  font-size: 16px;
  line-height: 16px;
  color: #3e4c59;
  cursor: pointer;
  background: transparent;
  padding: 1.4rem 1.7rem;
  transition: all 0.2s;
  width: 100%;

  &.active,
  &:hover {
    background: #f5f7fa;
    border-radius: 3px;
    color: ${colors.black};
    font-weight: ${weights.medium};
  }
`

const SideBar = () => {
  const sidebarLinks = [
    'Wallets',
    'Prices',
    'Peer2Peer',
    'Activity',
    'Settings',
  ]

  return (
    <SideBarContainer>
      <LinksContainer>
        {sidebarLinks.map((_link, _i) => {
          return (
            <LinkItem key={_link} className={_i === 0 ? 'active' : ''}>
              <Link className={_i === 0 ? 'active' : ''}>{_link}</Link>
            </LinkItem>
          )
        })}
      </LinksContainer>
    </SideBarContainer>
  )
}

export default SideBar
