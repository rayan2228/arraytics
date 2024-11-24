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
  padding: ${({ padding }) => padding};
  margin: ${({ margin }) => margin};
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
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
  }
`;

const Title = styled.h2`
  font-size: ${({ fontSize }) => fontSize || "14px"};
  color: ${({ color }) => color || "#49687e"};
  font-weight: ${({ fontWeight }) => fontWeight || "400"};
  text-align: ${({ textAlign }) => textAlign};
  padding: ${({ padding }) => padding};
  line-height: ${({ lineHeight }) => lineHeight || "24px"};
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor };
  }
`;

const PlanItem = styled.div`
  display: flex;
  flex-direction: column;
  padding:24px 20px;
  border: 1px solid #eaeff2;
  border-top:8px solid ${({ bcolor }) => bcolor || "transparent"};
  border-radius: 8px;
  background-color: white;
  position: relative;
`;



const FeaturesList = styled.li`
    position: relative;
    padding: 5px 0px;
    cursor: pointer;
    &:hover span {
      visibility: visible;
      opacity: 1;
    }
`
const FeaturesListDescription = styled.span`
    background: #fff;
    border: 1px solid #fff;
    border-radius: 4px;
    bottom: 120%;
    box-shadow: 0 0 18px 0 rgba(73, 104, 126, .2);
    color: #49687e;
    visibility: hidden;
    opacity: 0;
    font-size: 14px;
    left: -10px;
    min-width: 224px;
    padding: 5px 10px;
    position: absolute;
    white-space: normal;
    word-break: break-word;
    z-index: 10;
    transition: all .3s ease-in-out;
`

const DropdownWrapper = styled.div`
  position: relative;
`;

const Selected = styled.div`
  padding: 2px 8px;
  border:${({ border }) => border};
  border-radius: 4px;
  cursor: pointer;
`;

const Options = styled.ul`
  position: absolute;
  top: 100%;
  left: 0px;
  width: 100%;
  border: 1px solid #ddd;
  background: white;
  z-index: 10;
  border-radius: 10px;
  overflow-y: auto;
  transition: all 0.3s ease-in-out;
`;


export { Container, Grid, Flex, Button, Title, PlanItem, FeaturesListDescription, DropdownWrapper, Selected, Options, FeaturesList };
