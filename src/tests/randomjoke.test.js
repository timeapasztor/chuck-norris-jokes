import React, { useEffect } from 'react';
import { create, act } from 'react-test-renderer';
import background from '../style/images/background.png';
import Api from '../api/Api';
import { useDispatch, useSelector } from 'react-redux';
import allActions from '../actions';
import { store } from '../store';
import { Provider } from 'react-redux';
import { Button } from '@material-ui/core';

function JokeDescription(props) {
    return <div>{props.joke}</div>;
}

function JokeCardImage(props) {
    return <img src={props.src} alt={props.alt} />;
}

const RandomJoke = () => {
    const randomJoke = useSelector((state) => {
        return state.randomJoke;
    });
    const dispatch = useDispatch();

    useEffect(() => {
        loadRandomJoke();
    }, []);

    const loadRandomJoke = async () => {
        try {
            let result = await Api.fetchRandomJoke();
            dispatch(allActions.RandomJoke.randomJoke(result));
        } catch (error) {
            console.log('error while fetching a random joke');
        }
    };

    return (
        <>
            <JokeDescription>{randomJoke?.value}</JokeDescription>
            <Button
                onClick={() => {
                    loadRandomJoke();
                }}
            >
                Get me a new one ...
            </Button>
        </>
    );
};

describe('Random joke description', () => {
    test('Matches the snapshot', () => {
        const div = create(<JokeDescription joke="Chuck Norris joke" />);
        expect(div.toJSON()).toMatchSnapshot();
    });
});

describe('Image on random joke page', () => {
    test('Matches the snapshot', () => {
        const img = create(<JokeCardImage src={background} alt="signature of chuck norris" />);
        expect(img.toJSON()).toMatchSnapshot();
    });
});

it('First load of a random joke', () => {
    let tree;
    act(() => {
        tree = create(
            <Provider store={store}>
                <RandomJoke />
            </Provider>
        );
    });
    expect(tree.toJSON()).toMatchSnapshot();
});

test('the className of Button includes MuiButton-root', () => {
    const root = create(<Button>Get me a new one ...</Button>).root;
    const element = root.findByType('button');
    expect(element.props.className.includes('MuiButton-root')).toBe(true);
});
