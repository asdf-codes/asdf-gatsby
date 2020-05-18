import React from 'react'
import {Container, ContainerNull, ButtonWrapper, H1, P, Button} from '../elements'


export const TypeWriter = () => {
    return(
        <Container>
            <ContainerNull>
                <H1>Hello, World</H1>
                <P>
                we do more with less & help people
                </P>
                <P>
                put ideas on the internet.
                </P>

                <ButtonWrapper>
                    <Button>Ideas on the internet</Button>
                </ButtonWrapper>
            </ContainerNull>
        </Container>
    )
}

