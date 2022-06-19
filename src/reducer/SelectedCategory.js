import { SELECTED_CATEGORY } from '../actions/SelectedCategory';

export const selectedCategoryReducer = (state = '', action) => {
    switch (action.type) {
        case SELECTED_CATEGORY:
            return action.payload.category;
        default:
            return state;
    }
};
