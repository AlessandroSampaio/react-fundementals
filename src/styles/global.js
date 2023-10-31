import  { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    body {
        font-family: sans-serif;
        background: ${(props) => props.theme.backgroundColor};
    }

    h1 {
        color: #fff;
    }
`;