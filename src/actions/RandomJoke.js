export const RANDOM_JOKE = 'RANDOM_JOKE';

const randomJoke = (joke) => {
    return {
        type: RANDOM_JOKE,
        payload: {
            joke
        }
    };
};

export default {
    randomJoke
};
