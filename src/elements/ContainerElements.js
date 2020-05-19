import styled from 'styled-components'

export const Container = styled.div `
    display: grid;
    grid-template-columns: 1fr 80vw 1fr;
    height: 100vh;
    grid-gap: 0.1rem;
`

export const ContainerNull = styled.div `
    grid-column: 2 / 3;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
`