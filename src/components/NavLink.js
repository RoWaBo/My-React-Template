import { Link } from "@reach/router";
import { css } from "@emotion/react";
import { useState } from "react";
/** @jsxImportSource @emotion/react */

const NavLink = props => {

    const [isActive, setIsActive] = useState()


    const active = ({ colors }) => css`
        color: ${colors.highlight};
    `
    const passive = ({ colors }) => css`
        color: ${colors.font.primary};
    `


    return (
        <Link
            {...props}
            getProps={({ isCurrent }) => setIsActive(isCurrent)}
            css={isActive ? active : passive}
        />
    );
}

export default NavLink;