import styled from 'styled-components'


export const ButtonWrapper = styled.div `
    padding-top: 3vw;
`

export const Button = styled.button `
    font-family: Courier, monospace;
    background-color: transparent;
    border: none;
    color: blue;
    text-align: right;
    border-bottom: 0.07em solid blue;
    display: inline-block;
    font-size: clamp(12px, 3vw, 22px);
    cursor: pointer;
`

export const H1 = styled.h1 `
    font-size: clamp(38px, 8vw, 12vw);
    font-family: 'Times New Roman', Times, serif;
    font-weight: 500;
    overflow: hidden; /* Ensures the content is not revealed until the animation */
    border-right: .15em transparent; /* The typwriter cursor */
    white-space: nowrap; /* Keeps the content on a single line */
    animation: 
      typing 2.5s steps(60, end),
      blink-caret .75s step-end infinite;

    @keyframes typing {
        from { width: 0 }
        to { width: 100% }
  }
  
  /* The typewriter cursor effect */
    @keyframes blink-caret {
        from, to { border-color: transparent }
        50% { border-color: #fff; }
  }
`

export const P = styled.p`
    font-family: Arial, Helvetica, sans-serif;
    font-style: normal;
    font-weight: 600;
    font-size: clamp(25px, 4vw, 6vw);;
`

  
  /* The typing effect */
  