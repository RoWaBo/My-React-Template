import facepaint from "facepaint";

const breakpoints = [550, 1000]

export const mq = facepaint(
    breakpoints.map(bp => `@media (min-width: ${bp}px)`)
)