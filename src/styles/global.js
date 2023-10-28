import  { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    
    ${
            (props) => console.log(props)
       
    }
    
    body {
        font-family: sans-serif;
        background: ${(props) => props.theme.backgroundColor};
    }
`;