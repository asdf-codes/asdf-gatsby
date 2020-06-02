import React from 'react'
import { useStaticQuery, graphql } from "gatsby"
import  Img from 'gatsby-image'
import {Container, ContainerNull, ContainerMain} from '../elements'
import {Path} from '../components'

export const Section = ({children}) => {

    

    return (
        <ContainerMain>
        <Container>
            <ContainerNull>
                {children}
              
            </ContainerNull>
            <Path/>
        </Container>
        </ContainerMain>
    )
} 

//  <ContainerVisual> 
//         <Img fixed={data.imageSharp.fixed} style={{
//             width: "100%",
//             height: "100%",
//         }}/>
//         </ContainerVisual>
            