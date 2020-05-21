import React from 'react'
import {Container, ContainerNull, ButtonWrapper, H1, P, Button, Divider} from '../elements'
import {Link} from 'gatsby'


export const TypeWriter = () => {
    return(
        <Container>
            <ContainerNull>
                <H1>Hello, World</H1>
                <Divider/>
                <P>
                we do more with less & help people
                </P>
                <P>
                put ideas on the internet.
                </P>
                <div style={{
                    paddingTop: '2vw',
                }}>
                <Divider/>
                <ButtonWrapper to="Projects">
                    <Button>👁 PROJECTS 👁</Button>
                </ButtonWrapper>
                </div>
            </ContainerNull>
        </Container>
    )
}

