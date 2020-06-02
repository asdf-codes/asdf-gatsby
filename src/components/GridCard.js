import React from 'react'
import {GridCardWrapper , ContentLink} from '../elements'
import {CoverImage} from '../components'

export const GridCard = ({slug, image}) => {
    return(
        <GridCardWrapper >
            <ContentLink to={slug}>
                <CoverImage fluid={image}/>
            </ContentLink>
        </GridCardWrapper >
    )
}