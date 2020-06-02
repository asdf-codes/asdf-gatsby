import styled from 'styled-components'

export const Container = styled.div `
    display: grid;
    grid-template-columns: 1fr 40vw 40vw 1fr;
    height: 100vh;
    max-width: 1920px;
    
    grid-gap: 0.1rem;

    @media ${props => props.theme.breakpoints.tablet} {
        grid-template-columns: 1fr 80vw 1fr;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-template-columns: 1fr 90vw 1fr;
    }
`

export const ContainerNull = styled.div `
    padding-top: 10rem;
    grid-column: 2 / 3;
`

export const ContainerVisual = styled.div `
    grid-column: 3 / 4;
    
    background: url(../images/Method.png) no-repeat center center fixed
`

export const Grid = styled.div `
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-template-rows: minmax(100px auto);
    grid-auto-flow: dense;
    grid-gap: 2rem;
`