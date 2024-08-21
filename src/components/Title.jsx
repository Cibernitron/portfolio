import styled from "styled-components";

const Title = ({ name, color }) => {
  return <StyledTitle color={color}>{name}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.h2`
  font-size: 2.5rem;
  position: relative;
  top: 0px;
  margin: 0;
  margin-bottom: 2rem;
  color: ${({ color }) => color};
`;
