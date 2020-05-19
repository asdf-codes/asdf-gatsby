import React from 'react'
import { CoverImage } from '../components'
import { ContentWrapper } from '../elements'

export const ContentCard = ({ title, excerpt, slug, image }) => {
    return (
        <ContentWrapper>
            <CoverImage fluid={image}/>
        </ContentWrapper>
    )
}