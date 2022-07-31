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

export function Dropdown(props: PropsWithChildren<ModalProps>) {
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
            setSelectedOption({ id: "", val: "No options available"})
            setOptionsList([])
        }
        props.optionSelected(selectedOption.id)
    }, [selectedOption])

    return (
    <div style={{ padding: '0px 24px 0px 25px' }}>
        <AddNewWalletDiscription>The crypto wallet will be created instantly and be available in your list of wallets.</AddNewWalletDiscription>
        <SelectWalletLabel>Select wallet</SelectWalletLabel>
        <DropDownContainer>
            <DropDownHeader onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
                {selectedOption.val}
                {!isDropdownOpen &&
                    <img src="./assets/icons/DropDownIcon.svg" alt="Drop Down Icon"></img>
                }
                {isDropdownOpen &&
                    <img style={{ transform: 'rotate(180deg)' }} src="./assets/icons/DropDownIcon.svg" alt="Drop Down Icon"></img>
                }
            </DropDownHeader>
            {isDropdownOpen && (
                <DropDownList>
                    {optionsList}
                </DropDownList>
            )}
        </DropDownContainer>
        <select onChange={(e) => setSelectedOption({ id: e.target.value, val: e.target.id })} style={{ width: 0 }}>
            {props.options.map((option: DropdownItem) => <option key={option.val} id={option.val} value={option.id}>{option.val}</option>)}
        </select>
    </div>
    )         
}

const DropDownContainer = styled.div`
    cursor: pointer;
    border: 1px solid #CBD2D9;
    border-radius: 5px;
    margin-top: 8px;
    padding-left: 24px;
    padding-right: 18px;
    color: balck;
    font-waight: 400;
    font-size: 16px;
    user-select: none;
    width: 351px;
    position: absolute;
    background: white;
    @media (max-width: 750px) {
        width: 68%;
    }
    @media (max-width: 500px) {
        width: 63%;
    }
    @media (max-width: 400px) {
        width: 58%;
    }
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
        padding - top: 0.8em;
    }
`
const ListItem = styled.li`
    list-style: none;
    margin-bottom: 0.8em;
`

const AddNewWalletDiscription = styled.div`
    margin-top: 50px;
    color: rgba(62, 76, 89, 1);
    font-size: 18px;
    font-weight: 400;
    line-height: 26px;
    @media (max-width: 750px) {
        font-size: 14px;
        margin-top: 30px;
    }
`

const SelectWalletLabel = styled.div`
    margin-top: 39px;
    color: rgba(62, 76, 89, 1);
    font-size: 16px;
    font-weight: 500;
    line-height: 26px;
`