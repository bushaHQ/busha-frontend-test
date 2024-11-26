import styled from "styled-components";

function Avatar({ name, color, size }: { name: string, color?: string, size?: string }) {
  const nameInital = name?.charAt(0);
  
  return <AvataDiv size={size} color={color}>{nameInital}</AvataDiv>;
}

export default Avatar;

const AvataDiv = styled.div<{ color?: string, size?: string }>`
  width: ${({ size }) => size ?? "36px"};
  height: ${({ size }) => size ?? "36px"};;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #9AA5B14D;
  font-weight: 500;
  font-size: 18px;
  border-radius: 100%;
  color: ${({ color }) => color ?? "#3e4c59"};
`;
