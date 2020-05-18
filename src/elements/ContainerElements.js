import styled from 'styled-components'

export const Container = styled.div `
    display: grid;
    grid-template-columns: minmax(10px, 1fr) 90% 1fr;
    max-height: 100vh;
    padding-top: 20rem;
    height: 100%;
    grid-gap: 0.1rem;
`

export const ContainerNull = styled.div `
    grid-column: 2 / 3;
`