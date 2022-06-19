import { RANDOM_JOKE } from '../actions/RandomJoke';

const initialState = {
    categories: [],
    created_at: '',
    icon_url: '',
    id: '',
    updated_at: '',
    url: '',
    value: ''
};

export const randomJokeReducer = (state = initialState, action) => {
    switch (action.type) {
        case RANDOM_JOKE:
            return action.payload.joke;
        default:
            return state;
    }
};
