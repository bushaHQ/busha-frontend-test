import { useState, PropsWithChildren } from "react";
import { useEffect } from "react";
import styled from "styled-components";

export interface DropdownItem {
    id: string
    val: string
}

export interface ModalProps {
    options: DropdownItem[]
    optionSelected: (value: string) => void
}

export function Dropdown(this: any, props: PropsWithChildren<ModalProps>) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState({} as DropdownItem);

    const [optionsList, setOptionsList] = useState([] as JSX.Element[])

    const onOptionClicked = (value: DropdownItem) => {
        setSelectedOption(value);
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        if (props.options && props.options.length > 0) {
            const optionsList = props.options.map((option: DropdownItem) => (
                <ListItem onClick={() => onOptionClicked(option)} key={option.id}>
                    {option.val}
                </ListItem>
            ))
            setOptionsList(optionsList)
            setSelectedOption(props.options[0])
        } else {
            setSelectedOption({} as DropdownItem)
        }
    }, [props.options])

    useEffect(() => {
        if (!selectedOption.val) {
            setSelectedOption({ id: "", val: "No options available" })
            setOptionsList([])
        }
        props.optionSelected(selectedOption.id)
    }, [selectedOption, props])

    return (
        <>
            <SelectWalletLabel>Select wallet</SelectWalletLabel>
            <DropDownContainer>
                <DropDownHeader onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                    {selectedOption.val}
                    {isDropdownOpen ?
                        <img style={{ transform: 'rotate(180deg)' }}
                            src="./assets/icons/DropDownIcon.svg" alt="Drop Down Icon"></img>
                        :
                        <img src="./assets/icons/DropDownIcon.svg" alt="Drop Down Icon"></img>
                    }
                </DropDownHeader>
                {isDropdownOpen && (
                    <DropDownList>{optionsList}</DropDownList>
                )}
            </DropDownContainer>
            <select onChange={(e) => setSelectedOption({ id: e.target.value, val: e.target.id })}
                style={{ width: 0, opacity: 0 }}>
                {props.options.map((option: DropdownItem) =>
                    <option key={option.id} id={option.id} value={option.id}>{option.val}</option>)}
            </select>
        </>
    )
}

const DropDownContainer = styled.div`
    border: 1px solid #CBD2D9;
    border-radius: 5px;
    margin-top: 8px;
    padding-left: 24px;
    padding-right: 18px;
    color: balck;
    font-weight: 400;
    font-size: 16px;
    user-select: none;
    position: absolute;
    background: white;
    left: 0;
    right: 0;
    margin-left: 24px;
    margin-right: 24px;
    cursor: pointer;
`

const DropDownHeader = styled.div`
    height: 62px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`

const DropDownList = styled.ul`
    padding: 0;
    margin-top: 20;
    &:first-child {
        padding-top: 0.8em;
    }
`
const ListItem = styled.li`
    list-style: none;
    margin-bottom: 0.8em;
`

const SelectWalletLabel = styled.div`
    margin-top: 39px;
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
    color: rgba(62, 76, 89, 1);
`