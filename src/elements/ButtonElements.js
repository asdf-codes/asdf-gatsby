import styled from 'styled-components'
import {Link} from 'gatsby'
import React from 'react'


export const ButtonWrapper = styled(props => <Link {...props}/>) `  
    
`

export const Button = styled.button`
    font-family: Courier, monospace;
    background-color: transparent;
    font-weight: 300;
    border: none;
    color: black;
    text-align: right;
    font-size: clamp(18px, 3vw, 22px);
    border: 0.2em solid black;
    border-radius: 100px;
    cursor: pointer;
    padding: 0.6rem 2rem;
    display: flex;
    &:hover,
    &:focus {
        transform: scale(1.1);
        color: white;
        background-color: black;
    }
`