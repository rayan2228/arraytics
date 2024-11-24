import styled from "@emotion/styled";

const Container = styled.div`
  max-width: 1320px;
  margin: auto;
  @media (max-width:1200px) {
    padding: 0px 8px;
  }
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
const PricingInfoComponent = styled(Flex)`
  @media (max-width:400px) {
    justify-content: space-around;
  }
`;
const PricingInfoButton = styled(Button)`
  @media (max-width:575px) {
    font-size: 14px;
    margin: 0px 2px;
  }
`;
const PlanWrapperComponent = styled(Grid)`
  @media (min-width: 320px) and ( max-width:575px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (min-width: 576px) and ( max-width:1200px) {
    grid-template-columns: repeat(2, 1fr);
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
    background-color: ${({ hoverBackgroundColor }) => hoverBackgroundColor};
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
    list-style-type: none;
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
    border-radius: 4px;
    bottom: 120%;
    box-shadow: 0 0 18px 0 rgba(73, 104, 126, .2);
    color: #49687e;
    visibility: hidden;
    opacity: 0;
    font-size: 14px;
    right: -12px;
    min-width: 224px;
    padding: 5px 10px;
    position: absolute;
    white-space: normal;
    word-break: break-word;
    z-index: 10;
    transition: all .3s ease-in-out;
`

const VisitorDetailsComponent = styled(Flex)`
  max-width: max-content;
`;


const DropdownWrapper = styled.div`
  position: relative;
  border:${({ border }) => border};
  padding: 2px 0px;
`;

const Selected = styled.div`
  padding: 2px 8px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
`;

const Options = styled.ul`
  position: absolute;
  top: 100%;
  left: 0px;
  min-width: max-content;
  border: 1px solid #f0f0f0;
  background: white;
  z-index: 10;
  border-radius: 10px;
  transition: all 0.3s ease-in-out;
  box-shadow: 0 20px 25px -5px rgba(0,0,0,0.1), 0 8px 10px -6px rgba(0,0,0,0.1);
`;


export { Container, Grid, Flex, Button, Title, PlanItem, FeaturesListDescription, DropdownWrapper, Selected, Options, FeaturesList, PricingInfoComponent, PricingInfoButton, PlanWrapperComponent, VisitorDetailsComponent };
