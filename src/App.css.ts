import styled from 'styled-components';
import getTheme from '../src/style/themes/theme';

const theme: any = getTheme();

export const TopHeader = styled.div`
    background: ${theme.palette.grey.light};
    position: relative;
    width: 100%;
    height: 61px;
    z-index: 5;
    top: 0;
    padding: 0 20px;
    border-bottom: 1px solid #444d63;
`;

export const TopNavigation = styled.div`
    height: 100%;
    overflow: hidden;
    margin: 0 auto;
    font-family: Quicksand, sans-serif;
    display: flex;
    align-items: center;
    .img {
        height: 35px;
        padding: 12px 0 0 35px;
        flex-grow: 0.7;
        animation-duration: 1s;
        animation-name: slidein;
        animation-iteration-count: initial;
    }
    a {
        color: ${theme.palette.dark.main};
        text-align: center;
        padding: 20px 20px;
        text-decoration: none;
        font-size: 17px;
    }

    a:hover {
        text-decoration: underline;
    }

    a.active {
        background-color: ${theme.palette.grey.dark};
        color: ${theme.palette.white.main};
    }
`;

export const MenuList = styled.div`
    display: flex;
    flex-direction: row;
    flex-grow: 1;
    justify-content: center;
    align-items: center;
    .selected {
        padding: 10px;
        background-color: ${theme.palette.grey.dark};
        color: ${theme.palette.white.main};
    }
`;
