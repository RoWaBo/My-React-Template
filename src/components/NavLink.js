import { Link } from "@reach/router";
import { useTheme } from "@emotion/react";

const NavLink = props => {

    const theme = useTheme()

    return (
        <Link {...props} getProps={({ isCurrent }) => {
            return {
                style: { color: isCurrent ? theme.colors.highlight : theme.colors.font.primary }
            }    
        }}/>
    );
}

export default NavLink;