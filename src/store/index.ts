import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { selectedCategoryReducer } from '../reducer/SelectedCategory';
import { randomJokeReducer } from '../reducer/RandomJoke';

export const store = configureStore({
    reducer: {
        selected: selectedCategoryReducer,
        randomJoke: randomJokeReducer
    }
});

export const rootReducer = combineReducers({
    selected: selectedCategoryReducer,
    randomJoke: randomJokeReducer
});

export type RootState = ReturnType<typeof rootReducer>;
