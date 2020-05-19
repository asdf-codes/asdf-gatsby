import React from 'react'
import { ContentWrapper, ContentLink } from '../elements'
import { CoverImage } from '../components'

export const ContentCard = ({ title, excerpt, slug, image }) => {
    return (
        <ContentWrapper>
            <ContentLink to={slug}>
                <CoverImage fluid={image}/>
            </ContentLink>
        </ContentWrapper>
    )
}