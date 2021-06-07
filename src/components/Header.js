import './css/header.css'
import React, { Component } from 'react';

import { $, $$, p } from './functions.js'
//component
import Burger from './Burger.js'
//images
import logo_bookmark from './images/logo-bookmark.svg'

class Header extends Component {

    state = {
        navClase: 'nav_list'
    }

    changeNavListClass = () => {
        this.setState({
            navClase: this.state.navClase === 'nav_list_hide' 
            ? 'nav_list' 
            : 'nav_list_hide'
        })
    }
    render() {
        return <header>
        <nav>
            <figure>
                <img src={logo_bookmark} />
            </figure>
            <Burger changeNavListClass={this.changeNavListClass}/>
            <ul className={this.state.navClase}>
                <li>Features</li>
                <li>Pricing</li>
                <li>Contact</li>
                <li>Login</li>
            </ul>
        </nav>
        <h1>A Simple Bookmark Manager</h1>
        <p>A clean and simple interface to organize your favourite websites. Open a new
            browser tab and see your sites load instantly. Try it for free.</p>
        <button>Get it on Chrome</button>
        <button>Get it on Firefox</button>
    </header>
    }
}

export default Header;