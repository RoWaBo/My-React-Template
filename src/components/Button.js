import { css } from "@emotion/react";
import { LightenDarkenColor } from "../helperFunctions";
/** @jsxImportSource @emotion/react */

const Button = (props) => {

    const style = ({ colors, font, spacing }) => css`
        padding: ${spacing.xs};
        font-size: ${font.size.m};
        background-color: ${colors.primary};
        color: ${colors.font.secondary};
        text-transform: uppercase;
        border: none;
        border-radius: 5px;
        cursor: pointer;
        transition: background-color .2s ease-out;

        &:hover {
            background-color: ${LightenDarkenColor(colors.primary, -30)}
        }

        & > * {
            pointer-events: none;
        }
    `

    return ( <button css={style} {...props}>{ props.children }</button> );
}
 
export default Button;