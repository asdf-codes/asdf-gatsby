import React from 'react'
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

export const CoverImage = ({fluid}) => {
    
    const data = useStaticQuery(graphql`
        query {
            imageSharp(fluid: {originalName: {eq: "moon.png"}}) {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    `)
    
    return (
            <Img fluid={fluid ? fluid : data.imageSharp.fluid} style={{   
                maxWidth: "500px",
                margin: "0 auto",
        }}/>
    )
}