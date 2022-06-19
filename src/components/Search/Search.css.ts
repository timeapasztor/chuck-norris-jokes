import styled from 'styled-components';
import getTheme, { fontSizesCSS, fontWeightsCSS } from '../../style/themes/theme';

const theme: any = getTheme();

export const SearchWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const SearchBar = styled.div`
    position: relative;
    margin: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 200px;
    background: ${theme.palette.white.main};
    border: 1px solid ${theme.palette.grey.hover};
    padding: 5px 10px;
    input {
        width: 160px;
        border: none;
        ${fontSizesCSS.fs16lh24ls44};
        font-family: ${theme.typography.fontFamily};
    }
    input:focus {
        outline: none;
    }
    span {
        width: 10px;
        cursor: pointer;
    }
`;

export const ErrorText = styled.span`
    margin: 0 auto;
`;

export const SearchText = styled.div`
    padding-top: 30px;
    font-weight: ${fontWeightsCSS.fontWeightMedium};
`;
