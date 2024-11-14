import styled from "styled-components";

function Avatar({ name, color }: { name: string, color?: string }) {
  const nameInital = name.charAt(0);
  
  return <AvataDiv color={color}>{nameInital}</AvataDiv>;
}

export default Avatar;

const AvataDiv = styled.div<{ color?: string }>`
  width: 36px;
  height: 36px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9AA5B14D;
  font-weight: 500;
  font-size: 18px;
  border-radius: 100%;
  color: ${({ color }) => color ?? "#3e4c59"};
`;
