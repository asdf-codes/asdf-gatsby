import React from 'react'
import { createGlobalStyle, ThemeProvider} from "styled-components"
import Theme from "./src/themes/theme"

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    body, html {
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
        background-color: ${props => props.theme.colors.light1};
    }

    img {
       position: relative;
    }

    a, u {
    text-decoration: none;
}
`


export const wrapRootElement = ({ element }) => (
        <ThemeProvider theme={Theme}>
            <GlobalStyle />
            {element}
        </ThemeProvider>
)

/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */
