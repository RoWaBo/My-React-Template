import { mq } from '../style/mediaQueryBreakPoints';

const spacing = {
    xxs: "0.2rem",
    xs: "0.5rem",
    s: "1rem",
    m: "1.5rem",
    l: "2rem",
    xl: "2.5rem",
    xxl: "5rem",
    gutterWidth: mq({
        maxWidth: ["400px", "600px", "1100px"]
    })
}

export default spacing