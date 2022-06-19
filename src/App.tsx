import React from 'react';
import { BrowserRouter as Router, NavLink } from 'react-router-dom';
import './App.css';
import Routes from './components/Routes';
import { MenuList, TopHeader, TopNavigation } from './App.css';

const App = () => {
    return (
        <Router>
            <TopHeader>
                <TopNavigation>
                    <MenuList>
                        <NavLink to="/random-joke" activeClassName={'selected'}>
                            Home
                        </NavLink>
                        <NavLink to="/categories" activeClassName={'selected'}>
                            Categories
                        </NavLink>
                        <NavLink to="/search" activeClassName={'selected'}>
                            Search ...
                        </NavLink>
                    </MenuList>
                </TopNavigation>
            </TopHeader>
            <Routes />
        </Router>
    );
};

export default App;
