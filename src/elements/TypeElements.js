import styled from 'styled-components'

export const TypeContainer = styled.div `
    padding-top: 5rem;
    max-width: 50vw;
    margin: 0 auto;
    padding: 5rem 0;
    

    @media ${props=> props.theme.breakpoints.tablet} {
    max-width: 95%; 
    }

    @media ${props=> props.theme.breakpoints.mobile} {
    max-width: 98%;
    
    }
    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        color: ${props => props.theme.colors.dark1};
        font-family: ${props => props.theme.fonts.sansSerif};
        font-style: normal;
        font-weight: 300;
        
    }
    
    h1:not(:first-child),
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin-top: 2rem;
    }
    
    h1 {
        font-family: ${props => props.theme.fonts.Serif};
        font-size: min(45px, 4vw);
        line-height: 2.5rem;
        font-weight: 600;
    }
    
    h2 {
        font-size: 1.5rem;
        line-height: 1.875rem;
        font-weight: 400;
    }
    
    h3 {
        font-size: 1.375rem;
        line-height: 1.625rem;
        font-weight: 700;
    }
    
    h4 {
        font-size: 1.25rem;
        line-height: 1.5rem;
        font-weight: 400;
    }
    
    h5 {
        font-size: 1.125rem;
        line-height: 1.375rem;
        font-weight: 700;
    }
    
    h6 {
        font-size: 1rem;
        line-height: 1.125rem;
        font-weight: 700;
        text-transform: uppercase;
    }
    
    p {
        font-size: 1.125rem;
        line-height: 1.875rem;
        font-weight: 400;
        font-family: ${props => props.theme.fonts.mono};
        color: ${props => props.theme.colors.dark2};
        margin-top: 2rem;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    
    a {
        color: ${props => props.theme.colors.main1};
        text-decoration: underline;
    }
    
    strong {
        font-weight: 700;
    }
    
    em {
        font-style: italic;
    }
    
    del {
        text-decoration: line-through;
    }
    
    blockquote p {
        font-style: italic;
        font-size: min(22px, 3vw);;;
        line-height: 2.125rem;
        margin: 3rem auto;
    }
    
    ul,
    ol {
        color: ${props => props.theme.colors.dark2};
        margin: 1rem 0 1rem 2rem;
    }
    
    li {
        margin: 0.25rem 0;
    }
    
    code {
        font-family: ${props => props.theme.fonts.code};
        font-size: 1rem;
        line-height: 1.875rem;
        color: ${props => props.theme.colors.light1};
        background-color: ${props => props.theme.colors.dark3};
        padding: 0 0.3rem;
    }
    
    hr {
        border: 0;
        height: 1px;
        background: ${props => props.theme.colors.dark1};
        opacity: 0.1;
        margin-top: 2rem;
    }
    
    table {
        width: 100%;
        border-spacing: 0.25rem;
        border-collapse: collapse;
        font-size: 1rem;
        line-height: 1.5rem;
        font-weight: 400;
    }
    
    th {
        font-weight: 700;
    }
    
    table,
    th,
    td {
        border: 1px solid ${props => props.theme.colors.dark3};
    }
    
    th,
    td {
        text-align: left;
      
    }

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 2 / span 6;
    }
    

`