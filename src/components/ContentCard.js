import React from 'react'
import { ContentWrapper, ContentLink, TypeContainer} from '../elements'
import { CoverImage } from '../components'
import {MDXRenderer} from "gatsby-plugin-mdx"

export const ContentCard = ({ title, excerpt, slug, image, body }) => {
    return (
        <ContentWrapper>
            <ContentLink to={slug}>
                <CoverImage fluid={image}/>
            </ContentLink>
            <TypeContainer>
                <MDXRenderer>{body}</MDXRenderer>
            </TypeContainer>
        </ContentWrapper>
    )
}