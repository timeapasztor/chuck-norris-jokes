import styled from 'styled-components';
import getTheme, { fontWeightsCSS } from '../../style/themes/theme';

const theme: any = getTheme();

export const CategoriesContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    .MuiList-root {
        padding: 30px;
        .selected {
            background-color: ${theme.palette.grey.light};
        }
    }
    .MuiListItem-root {
        display: inline-block;
        padding: 10px;
        margin: 5px 10px;
        border: 1px solid ${theme.palette.grey.light};
        width: auto;
    }
`;
export const CategoryText = styled.div`
    padding-top: 30px;
    font-weight: ${fontWeightsCSS.fontWeightMedium};
`;
