import React from 'react';
//import s from './Headex.scss';
import {NavLink} from 'react-router-dom';

const Header = () => {
    return (<header>
        <h2>You are login</h2>
        <div>
            <NavLink to={'/logout'} >Logout</NavLink>
        </div>
    </header>)
}