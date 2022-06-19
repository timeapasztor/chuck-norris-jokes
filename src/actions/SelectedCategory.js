export const SELECTED_CATEGORY = 'SELECTED_CATEGORY';

const selectedCategory = (category) => {
    return {
        type: SELECTED_CATEGORY,
        payload: {
            category
        }
    };
};

export default {
    selectedCategory
};
