import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
    }

    ul{
        list-style: none;
    }

    a{
        text-decoration: none;
    }

    button{
        outline: none;
        border: none;
    }

    input{
        outline: none;
        border: none;
    }
`;

export default GlobalStyle;