import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    
    *{
        margin: 0px;
        padding: 0px;
        box-sizing: border-box;
    }
    body,html{
        width: 100%;
        user-select: none;
        scroll-behavior: smooth;
        font-family: "Raleway" ,sans-serif;
        font-size: 16px;
        background-color:#FCF6FD;
        
        img{
            pointer-events: none;
        }
    }
`;
