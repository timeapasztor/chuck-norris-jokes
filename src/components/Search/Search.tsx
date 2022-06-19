import React, { useEffect, useState } from 'react';
import { SearchWrapper, ErrorText, SearchText, SearchBar } from './Search.css';
import { Backdrop, CircularProgress } from '@mui/material';
import Api from '../../api/Api';
import { JokeType } from '../../utils/types';
import _ from 'lodash';
import { DescriptionBox, JokeDescription, QuoteMark } from '../../style/styled-components/reusable.css';

const Search: React.FC = () => {
    const [search, setSearch] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [randomJoke, setRandomJoke] = useState<JokeType>({
        categories: [],
        created_at: '',
        icon_url: '',
        id: '',
        updated_at: '',
        url: '',
        value: ''
    });
    const [noResult, setNoResult] = useState(false);
    const [errorText, setErrorText] = useState('');

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            if (search !== '') {
                loadSearchResults();
            }
        }, 2000);

        return () => clearTimeout(delayDebounceFn);
    }, [search]);

    const loadSearchResults = async () => {
        try {
            setIsLoading(true);
            let result = await Api.fetchSearchResult(search);
            setIsLoading(false);
            if (result.error && result.status === 400) {
                setErrorText('Query must be between 3 and 120 characters.');
            }
            if (result.total > 0) {
                setErrorText('');
                setRandomJoke(_.sample(result.result));
            }
            if (result.total === 0) {
                setRandomJoke({
                    categories: [],
                    created_at: '',
                    icon_url: '',
                    id: '',
                    updated_at: '',
                    url: '',
                    value: ''
                });
                setNoResult(true);
                setErrorText('');
            }
        } catch (error) {
            setIsLoading(false);
            setNoResult(false);
            setErrorText('');
            console.log('error while fetching result for query');
        }
    };

    const handleSearch = (event: any) => {
        setSearch(event.target.value);
    };

    const clearSearch = () => {
        setSearch('');
        setRandomJoke({
            categories: [],
            created_at: '',
            icon_url: '',
            id: '',
            updated_at: '',
            url: '',
            value: ''
        });
        setErrorText('');
        setNoResult(false);
    };

    const renderJoke = () => {
        if (search !== '' && randomJoke?.value !== '') {
            return (
                <DescriptionBox style={{ margin: '0 auto' }}>
                    <QuoteMark>‟</QuoteMark>
                    <JokeDescription>{randomJoke?.value}</JokeDescription>
                </DescriptionBox>
            );
        }
        if (search !== '' && noResult) {
            return <ErrorText>No result found for this query.</ErrorText>;
        }
        if (search !== '' && errorText !== '') {
            return <ErrorText>{errorText}</ErrorText>;
        }
    };

    return (
        <SearchWrapper>
            <SearchText>Enter your search queries below:</SearchText>
            <SearchBar>
                <label htmlFor="search" className="contacts-search">
                    <input id="search" type="text" onChange={handleSearch} placeholder="Search ..." value={search} />
                    <span onClick={clearSearch}>X</span>
                </label>
                <Backdrop
                    style={{ display: 'flex' }}
                    sx={{ color: 'white', zIndex: (theme: any) => theme.zIndex.drawer + 1 }}
                    open={isLoading}
                >
                    <CircularProgress color="inherit" />
                </Backdrop>
            </SearchBar>
            {renderJoke()}
        </SearchWrapper>
    );
};

export default Search;
