import styled from 'styled-components'
import React from 'react'
import { Link } from 'gatsby'

export const ContentWrapper = styled.div `
    margin-top: 5rem;
    grid-column: 2 / 3;
    grid-row: 2/3;
    overflow: hidden;
    position: relative;
`

export const ContentLink = styled(props => <Link {...props}/>)`
    width: 100px;
    height: 100px;
`

export const GridCardWrapper = styled.div `
    
`
