import { Link } from "@reach/router";
import { useTheme } from "@emotion/react";

const NavLink = props => {

    const theme = useTheme()

    return (
        <Link {...props} getProps={({ isCurrent }) => {
            return {
                style: { borderBottom: isCurrent && `solid 2px ${theme.colors.primary}`}
            }    
        }}/>
    );
}

export default NavLink;