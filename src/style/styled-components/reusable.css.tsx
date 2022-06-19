import styled from 'styled-components';
import getTheme, { fontWeightsCSS } from '../themes/theme';

const theme: any = getTheme();

export const DescriptionBox = styled.div`
    display: flex;
    flex-direction: row;
    border: 1px solid ${theme.palette.grey.light};
    border-left: 5px solid ${theme.palette.grey.light};
    width: 50%;
`;

export const QuoteMark = styled.span`
    font-weight: ${fontWeightsCSS.fontWeightMedium};
    font-size: 100px;
    color: ${theme.palette.grey.dark};
    align-self: center;
`;

export const JokeDescription = styled.span`
    align-self: center;
    color: black;
    text-align: justify;
    line-height: 1.5;
    padding: 10px;
`;
