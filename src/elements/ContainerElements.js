import styled from 'styled-components'

export const ContainerMain = styled.div `
    display: flex;
    justify-content: center;
    
`

export const ContentContainer = styled.div `
    display: grid;
    grid-template-columns: 1fr 90% 1fr;
    height: 100vh;
`

export const Container = styled.div `
    display: grid;
    grid-template-columns: 1fr 50% 50% 1fr;
    height: 100vh;
    max-width: 1000px;
    
    grid-gap: 0.1rem;

    @media ${props => props.theme.breakpoints.tablet} {
        display: flex;
        flex-direction: column;
        margin: 2rem;
    }

    @media ${props => props.theme.breakpoints.mobile} {
        grid-template-columns: 1fr 90vw 1fr;
    }
`

export const ContainerNull = styled.div `
    display:flex;
    align-items: center;
    grid-column: 2 / 3;
    @media ${props => props.theme.breakpoints.tablet} {
        margin-bottom: 5rem;
    }
`

export const ContainerVisual = styled.div `
    grid-column: 3 / 4;
    

    @media ${props => props.theme.breakpoints.mobile} {
        grid-column: 2 / 3;
    }
    
`

export const Grid = styled.div `
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr ;
    grid-template-rows: minmax(100px auto);
    grid-auto-flow: dense;
    grid-gap: 2rem;
`