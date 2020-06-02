import React from 'react'
import {ButtonWrapper, H1, P, Button, Divider, Widther} from '../elements'


export const Method = () => {
    return(

            <div>
                <H1>Method</H1>
                <Divider height="small"/>
                <Widther>
                    <P>
                    ideas come from within to bind with the outsiede шorld to make things happen.
                </P>
                </Widther>
                <Divider height="medium"/>
                <ButtonWrapper to="/blueprint/">
                    <Button> 📐 blueprint 📐 </Button>
                </ButtonWrapper>
            </div>
    )
}