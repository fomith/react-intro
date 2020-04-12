import React from 'react';
import a from '../Header/Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <header className={a.header}>

            <img src="https://avatars.mds.yandex.net/get-pdb/1605413/2d7ca512-f063-43a7-bf0f-6175b35577fb/s1200?webp=false" alt="asd" />
            <ul>
                <li><NavLink to="/profile" activeClassName={a.active}>Profile</NavLink></li>
                <li><NavLink to="/dialogs" activeClassName={a.active}>Messages</NavLink></li>
                <li><NavLink to="/news" activeClassName={a.active}>News</NavLink></li>
                <li><NavLink to="/Music" activeClassName={a.active}>Music</NavLink></li>
                <li><NavLink to="/Setting" activeClassName={a.active}>Setting</NavLink></li>
            </ul>
        </header>
    )
};

export default Header;