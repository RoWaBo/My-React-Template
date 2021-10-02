import { Global, css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

const GlobalStyle = () => {

    const globalStyles = ({ colors, font }) => css`
    
        @import url(${font.fontImportUrl});

        * {
            margin:0;
            padding:0;
            box-sizing:border-box;
            line-height: 1.5;
            font-family: ${font.family};
        }
        img {
            width:100%;
            height:auto;
            display:block;
        }
        a {
            text-decoration: none;
            color: ${colors.font.primary};
        }
        ul {
            list-style: none;
        }
        body {
            background-color: ${colors.background.primary};
        } 
    `

    return <Global styles={globalStyles} />
}

export default GlobalStyle;