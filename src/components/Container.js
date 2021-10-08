import PropTypes from 'prop-types';
import styled from "@emotion/styled";
import { useTheme } from "@emotion/react";

const Container = ({ children, maxWidth, as }) => {

    const { spacing } = useTheme()

    const Container = styled.div`
        display: flex;
        align-items: center;
        flex-direction: column;
        padding: ${spacing.wrapping};

        & > * {
            ${maxWidth && `max-width: ${spacing.contentWidth};`};   
        }    
    `

    return <Container as={as}>{ children }</Container>
}

Container.propTypes = {
    maxWidth: PropTypes.bool,
    as: PropTypes.string
}

export default Container;