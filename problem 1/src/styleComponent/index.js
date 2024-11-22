import styled from "styled-components"
const Container = styled.div`
    max-width:1320px;
    margin:auto
`;

const Grid = styled.div`
    display:grid,
    grid-template-columns:${({ templateColumns }) => templateColumns};
    grid-template-rows:${({ templateRows }) => templateRows};
    gap:${({ gap }) => gap};
`
const Flex = styled.div`
    display:flex;
    align-items:${({ alignItems }) => alignItems};
    justify-content:${({ justifyContent }) => justifyContent};
    flex-wrap:${({ flexWrap }) => flexWrap};
    gap:${({ gap }) => gap};
    flex-direction:${({ flexDirection }) => flexDirection};
`
const Button = styled.button`
    background-color:${({ backgroundColor }) => backgroundColor};
    color:${({ color }) => color};
    border-radius:${({ borderRadius }) => borderRadius};
    padding:${({ padding }) => padding};
    border:${({ border }) => border};
`
const Title = styled.h2`
    font-size:${({ fontSize }) => fontSize};
    color:${({ color }) => color};
    font-weight:${({ fontWeight }) => fontWeight};
    text-align:${({ textAlign }) => textAlign};
`

export { Container, Grid, Flex, Button, Title }