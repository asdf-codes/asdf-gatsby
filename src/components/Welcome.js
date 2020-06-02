import React from 'react'
import {ButtonWrapper, H1, P, Button, Divider, Widther} from '../elements'


export const Welcome = () => {
    return(

            <div>
                <H1>Hello, World</H1>
                <Divider height="small"/>
                <Widther>
                    <P>
                    we do more with less & help people
                    
                    put ideas on the internet.
                    </P>
                </Widther>
                
                <Divider height="large"/>
                <ButtonWrapper to="Projects">
                    <Button>👁 projects 👁</Button>
                </ButtonWrapper>
                
            </div>
    )
}

