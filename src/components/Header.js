import './css/header.css'
import React, {Component} from 'react';

class Header extends Component {
	

	render() {
		return <header>
        <nav>
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