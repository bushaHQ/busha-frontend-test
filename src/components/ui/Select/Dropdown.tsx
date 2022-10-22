import React, { useState, useEffect, useRef } from 'react'
import {
  DropDownContainer,
  DropDownHeader,
  DropDownBody,
  ListItem,
  DropDownLabel,
  Placeholder,
  DropDownIcon,
  DropDownList,
} from './styles'
import ChevronUp from '../../../assets/svgs/CaretDown.svg'
import { Text } from '../Text'
import { colors, sizes } from '../../../styles/common'

interface OptionsProps {
  name: string
  value: any
  selected?: boolean
}

interface IProps {
  options: OptionsProps[]
  onChange(value: string): void
  selectedColor?: string
  hoverColor?: string
  placeholder?: string
}

const Dropdown: React.FC<IProps> = ({
  options,
  onChange,
  selectedColor,
  hoverColor,
  placeholder,
}) => {
  const node = useRef<any>(null)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [value, setValue] = useState<string>('')
  const [label, setLabel] = useState<string>('')

  const handleClickOutside = (event: any) => {
    if (null !== node.current) {
      if (node.current?.contains(event.target)) {
        return // inside click
      }
      setIsOpen(false) // outside click
    }
  }

  useEffect(() => {
    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    } else {
      document.removeEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [isOpen])

  const handleChange = (name: string, value: any) => {
    setLabel(name)
    setValue(value)
    onChange(value)

    // delay dropdown close a bit to reflect the selection
    setTimeout(() => {
      setIsOpen(false)
    }, 150)
  }

  const handleToggle = () => setIsOpen(!isOpen)

  return (
    <DropDownContainer ref={node}>
      <Text
        color={colors.grey60}
        fontWeight="500"
        lineHeight="2.6rem"
        fontSize={sizes.base}
        className="mb-2"
      >
        Select Wallet
      </Text>
      <DropDownHeader onClick={handleToggle}>
        {value ? (
          <DropDownLabel>{label}</DropDownLabel>
        ) : (
          !value && <Placeholder>{placeholder}</Placeholder>
        )}
        <DropDownIcon isOpen={isOpen} src={ChevronUp} />
      </DropDownHeader>
      <DropDownBody isOpen={isOpen}>
        <DropDownList>
          {options.map(({ name: optionName, value: optionValue }, index) => {
            return (
              <ListItem
                key={index}
                hoverColor={hoverColor}
                selectedColor={selectedColor}
                onClick={() => handleChange(optionName, optionValue)}
                selected={optionValue === value && optionName === label}
              >
                {optionName}
              </ListItem>
            )
          })}
        </DropDownList>
      </DropDownBody>
    </DropDownContainer>
  )
}

export default Dropdown
