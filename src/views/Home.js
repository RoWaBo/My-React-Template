/** @jsxImportSource @emotion/react */
// import { css } from '@emotion/react';
import ToggleButton from "../components/ToggleButton";
import useWindowSize from "../hooks/useWindowSize";

const Home = () => {
    const { width } = useWindowSize()

    return (
        <>
            <h1>Home</h1>
            <p>2 ugers gruppeopgave hvor der skulle kodes en hifi webshop. Arbejdet blev organiseret og fordelt mellem vores hold på 4 personer via Github. Vi brugte kanbanmetoden og lavede sprints af en uges varighed. Hovedfokus var at manipulere og filtrere data fra en selvskrevet JSON-fil, som indeholdte al data omkring de solgte produkter.
            Jeg fik kendskab til et par nye "higher order functions" som filter og sort. Jeg brugte funktionerne til at sortere alle produkter efter pris og alfabetisk rækkefølge. Derudover kodede jeg også en søgefunktion med en dropdown menu. Alt i alt gik projektet godt og vi fik udført alle ekstra opgaver.</p>
            <p>Window size is: {width}</p>

            <ToggleButton />
        </>
    );
}

export default Home;