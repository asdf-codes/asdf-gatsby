import styled from 'styled-components' 

export const Divider = styled.div `
    height: ${props => {
        switch(props.height) {
            case "small":
                return "1vh"
            case "medium":
                return "2vh"
            case "large":
                return "2.5vh"
        }
    }};
    
`

export const Widther = styled.div `
    max-width: 400px;
`