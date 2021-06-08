import './css/header.css'
import React, { Component } from 'react';

import { $, $$, p } from './functions.js'
//component
import Burger from './Burger.js'
//images
import logo_bookmark from './images/logo-bookmark.svg';
import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';

class Header extends Component {

    state = {
        navClase: 'nav_list_container_hide',
        navBackground: 'white'
    }

    changeNavListClass = () => {
        this.setState({
            navClase: this.state.navClase === 'nav_list_container' 
            ? 'nav_list_container_hide' 
            : 'nav_list_container',
            navBackground: this.state.navBackground === 'white'
            ? 'gray'
            : 'white'
        })
    }
    render() {
        return <header>
        <nav style= {{backgroundColor: this.state.navBackground}}>
            <figure className='logo_container'>
                <img src={logo_bookmark} />
            </figure>
            <Burger changeNavListClass={this.changeNavListClass}/>
            <div className={this.state.navClase}>
                <ul className='nav_list'>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                    <li><a href="">Login</a></li>
                </ul>
                <figure className='header_social_media'>
                    <img src={facebook} alt="facebook logo" />
                    <img src={twitter} alt="twitter logo" />
                </figure>
            </div>
        </nav>
        <h1 className='header_title'>A Simple Bookmark Manager</h1>
        <p>A clean and simple interface to organize your favourite websites. Open a new
            browser tab and see your sites load instantly. Try it for free.</p>
        <button className='button_left'>Get it on Chrome</button>
        <button className='button_right'>Get it on Firefox</button>
    </header>
    }
}

export default Header;