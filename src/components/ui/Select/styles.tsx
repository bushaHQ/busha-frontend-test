import styled from 'styled-components'
import { colors } from '../../../styles/common'

interface DropDownBodyProps {
  isOpen: boolean
}

interface ListItemProps {
  selected?: boolean
  selectedColor?: string
  hoverColor?: string
}

const DropDownContainer = styled('section')`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  cursor: pointer;
`

const DropDownHeader = styled('div')`
  width: 100%;
  height: 4rem;
  border: 1px solid #cbd2d9;
  border-radius: 5px;
  position: relative;
`

const DropDownBody = styled('div')<DropDownBodyProps>`
  position: relative;
  width: 100%;
  transition: all 0.1s ease-in-out;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
`

const DropDownList = styled('ul')`
  display: block;
  max-height: 150px;
  overflow-y: scroll;
  border: 1px solid #cbd2d9;
  position: absolute;
  left: 0;
  right: 0;
  list-style: none;
`

const ListItem = styled('li')<ListItemProps>`
  padding: 1rem 2.4rem;
  text-align: left;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  background: ${(props) => (props.selected ? props.selectedColor : '#fff')};
  &:hover {
    background: ${(props) => !props.selected && props.hoverColor};
  }
`

const Placeholder = styled('div')`
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: ${colors.black};
  padding: 1rem 2.4rem;
  position: absolute;
  top: 40%;
  transform: translateY(-40%);
`

const DropDownLabel = styled('div')`
  width: 100%;
  padding: 1rem 2.4rem;
  position: absolute;
  top: 40%;
  transform: translateY(-40%);
  font-weight: 400;
  font-size: 14px;
  line-height: 14px;
  color: ${colors.black};
`

const DropDownIcon = styled('img')<DropDownBodyProps>`
  position: absolute;
  right: 5%;
  top: 40%;
  transition: all 0.2s ease-in;
  transform: ${(props) => (props.isOpen ? `scaleY(-1)` : ``)};
`

export {
  DropDownContainer,
  DropDownHeader,
  DropDownBody,
  ListItem,
  Placeholder,
  DropDownLabel,
  DropDownIcon,
  DropDownList,
}
