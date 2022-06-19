export default class Api {
    public static fetchRandomJoke = async () => {
        return await Api?.fetch(Url.randomJoke);
    };

    public static fetchJokeCategories = async () => {
        return await Api?.fetch(Url.jokeCategories);
    };

    public static fetchJokeFromCategory = async (category: string) => {
        return await Api?.fetch(`${Url.jokeFromCategory}${category}`);
    };

    public static fetchSearchResult = async (query: string) => {
        return await Api?.fetch(`${Url.searchQuery}${query}`);
    };

    private static fetch = async (url: string) => {
        try {
            let response = await fetch(url);
            return await response.json();
        } catch (exception) {
            return exception;
        }
    };
}

export const Url = {
    randomJoke: 'https://api.chucknorris.io/jokes/random',
    jokeCategories: 'https://api.chucknorris.io/jokes/categories',
    jokeFromCategory: 'https://api.chucknorris.io/jokes/random?category=',
    searchQuery: 'https://api.chucknorris.io/jokes/search?query='
};
