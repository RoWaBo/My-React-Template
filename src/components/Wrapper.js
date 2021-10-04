import { css } from "@emotion/react";
/** @jsxImportSource @emotion/react */
import PropTypes from 'prop-types';

const Wrapper = ({ children, maxWidth }) => {

    return (
        <main 
            css={ ({spacing}) => css`
                display: flex;
                align-items: center;
                flex-direction: column;
                padding: ${spacing.m};

                & > * {
                    ${maxWidth && spacing.gutterWidth};   
                }
                `
            }
        >
            { children }
        </main>
    ); 
}

Wrapper.propTypes = {
    maxWidth: PropTypes.string
}
 
export default Wrapper;