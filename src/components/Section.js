import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import  Img from 'gatsby-image'
import {Container, ContainerNull, ContainerVisual} from '../elements'

export const Section = ({children}) => {

    

    return (
        <Container>
            <ContainerNull>
                {children}
              
            </ContainerNull>
            <ContainerVisual/>
        </Container>
    )
} 

//  <ContainerVisual> 
//         <Img fixed={data.imageSharp.fixed} style={{
//             width: "100%",
//             height: "100%",
//         }}/>
//         </ContainerVisual>
            