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
        font-size: 16px;
        
        img{
            pointer-events: none;
        }
    }
`;
