import styled from 'styled-components'

export const Container = styled.div `
    display: grid;
    grid-template-columns: 1fr 80vw 1fr;
    
    grid-gap: 0.1rem;

    @media ${props => props.theme.breakpoints.mobile} {
        grid-template-columns: 1fr 90vw 1fr;
    }
`

export const ContainerNull = styled.div `
    padding-top: 10rem;
    grid-column: 2 / 3;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`