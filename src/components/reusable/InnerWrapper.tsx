import styled from "styled-components";

//Styled component generator
const InnerWrapper = styled.div`
max-width: 1120px;
margin: auto;
display: flex;
gap: 30px;
padding: 0px 10px;
font-family: "AribauGrotesk";
@media (max-width: 550px) {
    gap: 10px;
}`

export default InnerWrapper;