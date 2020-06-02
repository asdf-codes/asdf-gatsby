import React from "react"
import { Welcome, Section, Method } from '../components'
import {graphql} from 'gatsby'
import Img from 'gatsby-image'

export default function IndexPage ({data}){
      return(
            <div>
            <Section>
                  <Welcome/> 
            </Section>
            
            <Section>
                  <Method/> 
            </Section>
            </div>
      )
}

export const query = graphql`
      query {
            file(relativePath:{ eq: "./images/Method.png"}) {
                  childImageSharp {
                        fluid {
                              ...GatsbyImageSharpFluid
                        }
                  }
            }
      }
`

  

