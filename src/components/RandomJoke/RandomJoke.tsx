import React, { useContext, useEffect, useState } from 'react';
import background from '../../style/images/background.png';
import Tooltip from '@mui/material/Tooltip';
import { Button } from '@material-ui/core';
import AutorenewRoundedIcon from '@mui/icons-material/AutorenewRounded';
import getTheme from '../../style/themes/theme';
import { AnotherButton, JokeCardImage, JokeCardWrapper } from './RandomJoke.css';
import { DescriptionBox, JokeDescription, QuoteMark } from '../../style/styled-components/reusable.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import allActions from '../../actions';
import Api from '../../api/Api';

const theme: any = getTheme();

const RandomJoke: React.FC = () => {
    const randomJoke = useSelector((state: RootState) => {
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
        <JokeCardWrapper className="test-joke-card-wrapper">
            <JokeCardImage src={background} alt="signature of chuck norris" />
            <DescriptionBox>
                <QuoteMark>‟</QuoteMark>
                <JokeDescription>{randomJoke?.value}</JokeDescription>
            </DescriptionBox>
            <AnotherButton>
                <Tooltip
                    title={'Click here and you get a new random Chuck Norris joke.'}
                    disableInteractive
                    enterDelay={200}
                    leaveDelay={200}
                    placement="top"
                    arrow
                >
                    <span>
                        <Button
                            variant="outlined"
                            onClick={() => {
                                loadRandomJoke();
                            }}
                        >
                            <label aria-hidden={false} style={{ cursor: 'pointer' }}>
                                <AutorenewRoundedIcon
                                    sx={{
                                        color: theme.palette.primary.main,
                                        width: '20px',
                                        height: '20px',
                                        marginLeft: '5px'
                                    }}
                                />
                                Get me a new one ...
                            </label>
                        </Button>
                    </span>
                </Tooltip>
            </AnotherButton>
        </JokeCardWrapper>
    );
};

export default RandomJoke;
