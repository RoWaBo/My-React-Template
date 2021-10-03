import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */

const Wrapper = ({ children }) => {

    return (
        <main 
            css={ ({spacing}) => css`
                display: flex;
                align-items: center;
                flex-direction: column;
                padding: ${spacing.m};

                & > * {
                    max-width: 600px;    
                }
                `
            }
        >
            { children }
        </main>
    ); 
}
 
export default Wrapper;