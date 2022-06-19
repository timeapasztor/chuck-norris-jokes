import styled from 'styled-components';
import getTheme, { fontSizesCSS } from '../../style/themes/theme';

const theme: any = getTheme();

export const JokeCardWrapper = styled.div`
    position: relative;
    margin: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const JokeCardImage = styled.img`
    width: 25%;
    height: 25%;
    border-radius: 4px;
    border: transparent;
    object-fit: cover;
    margin-bottom: 30px;
    transition: all 1ms ease-in-out;
    align-items: center;
`;

export const AnotherButton = styled.div`
    width: 100%;
    padding: 20px 0;
    display: flex;
    justify-content: center;
    ${fontSizesCSS.fs12lh16ls4};
    .MuiButtonBase-root {
        padding: 0;
        margin: 5px 20px 0 0;
        text-transform: none;
        background: ${theme.palette.white.main};
        svg {
            margin: 0 5px 0 0;
        }
        label {
            display: flex;
            align-items: center;
            padding: 2px 8px;
            cursor: pointer;
        }
    }
`;
