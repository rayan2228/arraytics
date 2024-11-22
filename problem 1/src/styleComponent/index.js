import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 1320px;
  margin: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ templateColumns }) => templateColumns};
  grid-template-rows: ${({ templateRows }) => templateRows};
  gap: ${({ gap }) => gap};
`;

const Flex = styled.div`
  display: flex;
  align-items: ${({ alignItems }) => alignItems};
  justify-content: ${({ justifyContent }) => justifyContent};
  flex-wrap: ${({ flexWrap }) => flexWrap};
  gap: ${({ gap }) => gap};
  flex-direction: ${({ flexDirection }) => flexDirection};
`;

const Button = styled.button`
  background-color: ${({ backgroundColor }) => backgroundColor || "transparent"};
  color: ${({ color }) => color};
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: ${({ padding }) => padding};
  border: ${({ border }) => border || "none"};
  font-weight: ${({ fontWeight }) => fontWeight};
  font-size: ${({ fontSize }) => fontSize || "14px"};
  text-align: ${({ textAlign }) => textAlign};
  cursor: ${({ cursor }) => cursor || "pointer"};
  margin: ${({ margin }) => margin};
`;

const Title = styled.h2`
  font-size: ${({ fontSize }) => fontSize || "14px"};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
`;



export { Container, Grid, Flex, Button, Title };
