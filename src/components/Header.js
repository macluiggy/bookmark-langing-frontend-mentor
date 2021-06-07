import './css/header.css'
import React, { Component } from 'react';

import { $, $$, p } from './functions.js'

class Header extends Component {

    state = {
        clase: 'burger'
    }

    changeClass = () => {
        this.setState({
            clase: this.state.clase === 'burger' ? 'change' : 'burger'
        })
    }

    render() {
        return <header>
        <nav>
            <figure></figure>
            <div className={this.state.clase} onClick={this.changeClass}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
            <ul>
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