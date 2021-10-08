import { useState } from "react";
import Button from "./Button";

const ToggleButton = () => {

    const [toggle, setToggle] = useState(true)

    const handleClick = () => {
        setToggle(preState => console.log(preState))
    }

    return ( <Button onClick={handleClick}>{toggle}</Button> );
}

export default ToggleButton;