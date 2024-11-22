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
  display: ${({ display }) => display || "inline-block"};
`;

const Title = styled.h2`
  font-size: ${({ fontSize }) => fontSize || "14px"};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: ${({ textAlign }) => textAlign};
`;

const PlanItem = styled.div`
  display: flex;
  flex-direction: column;
  padding:24px 20px;
  border: 1px solid #eaeff2;
  border-top:8px solid ${({ bcolor }) => bcolor || "transparent"};
  border-radius: 8px;
  background-color: white;
  min-width: 300px;
`;

const FeaturesListDescription = styled.div`
    background: #fff;
    border: 1px solid #fff;
    border-radius: 4px;
    bottom: 120%;
    box-shadow: 0 0 18px 0 rgba(73, 104, 126, .2);
    color: #49687e;
    /* display: none; */
    font-size: 14px;
    left: -10px;
    min-width: 224px;
    padding: 5px 10px;
    position: absolute;
    white-space: normal;
    word-break: break-word;
    z-index: 10;
`


export { Container, Grid, Flex, Button, Title, PlanItem, FeaturesListDescription };
