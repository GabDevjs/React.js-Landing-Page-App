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
    html {
        overflow-x: hidden;
        scroll-behavior: smooth;
        scroll-padding-top: 4rem;
    }
        
    html::-webkit-scrollbar {
        width: .4rem;
    }

    html::-webkit-scrollbar-thumb {
        background: #00b7ff;
        border-radius: 1rem;
    }
`;

export default GlobalStyle;