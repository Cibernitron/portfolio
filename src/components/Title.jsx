import styled from "styled-components";
import { theme } from "../styles/themes";

const Title = ({ name }) => {
  return <StyledTitle>{name}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
`;
