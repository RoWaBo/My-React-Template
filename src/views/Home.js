/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useTheme } from '../contexts/ThemeContext';


const Home = () => {

    const {setTheme} = useTheme()

    return (
        <div css={({  colors }) => css`background: ${colors.background.primary};`}>
            <h1>Home</h1>
            <p>REACT_APP_NAKABLE: {process.env.REACT_APP_NAKABLE}</p>
            <button onClick={() => setTheme('dark')}>change theme</button>
        </div>
    );
}

export default Home;