import React, { useEffect, useRef, useState } from 'react';
import { CategoriesContainer, CategoryText } from './Categories.css';
import Api from '../../api/Api';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Link from '@material-ui/core/Link';
import { JokeType } from '../../utils/types';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import allActions from '../../actions';
import { DescriptionBox, JokeDescription, QuoteMark } from '../../style/styled-components/reusable.css';

const Categories: React.FC = () => {
    const [categories, setCategories] = useState<string[]>([]);
    const [selectedJoke, setSelectedJoke] = useState<JokeType>({
        categories: [],
        created_at: '',
        icon_url: '',
        id: '',
        updated_at: '',
        url: '',
        value: ''
    });
    const selectedId = useRef<string>('');
    const selected = useSelector((state: RootState) => {
        return state.selected;
    });
    const dispatch = useDispatch();

    useEffect(() => {
        loadCategories();
        return () => {
            dispatch(allActions.SelectedCategory.selectedCategory(''));
            setSelectedJoke({
                categories: [],
                created_at: '',
                icon_url: '',
                id: '',
                updated_at: '',
                url: '',
                value: ''
            });
        };
    }, []);

    useEffect(() => {
        if (selected !== '') {
            loadJokeFromCategory();
        }
    }, [selected]);

    const loadCategories = async () => {
        try {
            let result = await Api.fetchJokeCategories();
            setCategories(result);
        } catch (error) {
            console.log('error while fetching categories');
        }
    };

    const loadJokeFromCategory = async () => {
        try {
            let result = await Api.fetchJokeFromCategory(selected);
            setSelectedJoke(result);
        } catch (error) {
            console.log('error while fetching a joke from selected category');
        }
    };

    const addClass = (id: string) => {
        document.getElementById(id)?.classList.add('selected');
    };

    const removeFromPreviousClass = () => {
        document.getElementById(selectedId.current)?.classList.remove('selected');
    };

    const renderCategoryItems = () => {
        let categoryListToRender: JSX.Element[] = [];
        categories.forEach((category, index) => {
            categoryListToRender.push(
                <ListItem
                    button
                    component={Link}
                    id={`${category}-${index}`}
                    key={`${category}-${index}`}
                    onClick={(evt: any) => {
                        removeFromPreviousClass();
                        addClass(`${category}-${index}`);
                        selectedId.current = `${category}-${index}`;
                        dispatch(allActions.SelectedCategory.selectedCategory(evt.target.innerText));
                    }}
                >
                    {category}
                </ListItem>
            );
        });
        return <List>{categoryListToRender}</List>;
    };

    const renderJokeFromCategory = (value: string) => {
        return (
            <DescriptionBox>
                <QuoteMark>‟</QuoteMark>
                <JokeDescription>{value}</JokeDescription>
            </DescriptionBox>
        );
    };

    return (
        <CategoriesContainer>
            {categories.length > 0 && <CategoryText>Choose a category and you get a joke.</CategoryText>}
            {categories.length > 0 && renderCategoryItems()}
            {selectedJoke.value !== '' && renderJokeFromCategory(selectedJoke.value)}
        </CategoriesContainer>
    );
};

export default Categories;
