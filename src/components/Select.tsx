import { useState, useEffect } from "react";
import styled from "styled-components";
import { useAppContext } from "../hook/useAppContext";
import { AppContextProps } from "../context/appContext";
import arrowdown from "../asset/image/arrowdown.svg";
import Loader from "./shared/Loader";

interface SelectProps {
  handleClose: () => void;
}

export const Select = ({ handleClose }: SelectProps) => {
  const [selectedOption, setSelectedOption] = useState<string>("");
  const {
    options,
    addAccount,
    isSuccess,
    addingWallet,
  } = useAppContext() as AppContextProps;

  useEffect(() => {
    if (options.length > 0) {
      setSelectedOption(options[0].name); // Set the first option's name as the default value
    }
  }, [options]);

  useEffect(() => {
    if (isSuccess) {
      handleClose();
    }
  }, [isSuccess, handleClose]);

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedOption(event.target.value);
  };

  const handleSubmit = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const selectedOptionData = options.find(
      (option) => option.name || option.currency === selectedOption
    );

    if (selectedOptionData) {
      const { name, currency, balance } = selectedOptionData;
      addAccount(name, currency, balance);
    }
  };

  return (
    <>
      <form>
        <CustomSelectContainer>
          <CustomSelect value={selectedOption} onChange={handleChange}>
            {options.map((option) => {
              return (
                <CustomOption key={option.name} value={option.currency}>
                  {option.name}
                </CustomOption>
              );
            })}
          </CustomSelect>
          <SelectIcon>
            <img src={arrowdown} alt="" />
          </SelectIcon>
        </CustomSelectContainer>
        <ModalButtonContainer>
          <ModalButton onClick={handleSubmit}>
            {addingWallet ? <Loader size={40} width={1} /> : "Create wallet"}
          </ModalButton>
        </ModalButtonContainer>
      </form>
    </>
  );
};

const CustomSelectContainer = styled.div`
  position: relative;
  border: 1px solid #cbd2d9;
  border-radius: 5px;
  background: #fff;
  padding-right: 17px;
  display: flex;
  justify-content: space-between;
`;

const CustomSelect = styled.select`
  appearance: none;
  padding: 24px 0 24px 24px;
  width: 100%;
  color: #000;
  font-size: 16px;
  line-height: 16px;
  background: #fff;
  outline: none;
  border: none;
`;

const CustomOption = styled.option`
  padding: 4px;
  cursor: pointer;
  color: #000;
  font-size: 16px;
  line-height: 16px;
`;

const SelectIcon = styled.div`
  display: flex;
  position: relative;
  right: 0;
  justify-content: center;
  align-items: center;
`;

const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 27px;
`;

const ModalButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 54px;
  color: #fff;
  font-size: 18px;
  font-weight: 500;
  line-height: 18px;
  border-radius: 40px;
  background: #000;
  outline: none;
  border: none;
  cursor: pointer;
`;
