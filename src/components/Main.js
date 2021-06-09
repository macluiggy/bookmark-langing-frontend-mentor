import React, { Component } from 'react';
//css
import './css/main.css';
//component
import Cards from './cards.js'


class Main extends Component {

	render() {
		return <main>
		<section className='main_section1'>
            <h2>Features</h2>
            <p>Our aim is to make it quick and easy for you to access your favourite websites.
                Your bookmarks sync between your devices so you can access them on the go.</p>
        </section>
        <section className='main_section2'>
            <ul>
                <li>Simple Bookmarking</li>
                <li>Speedy Searching</li>
                <li>Easy Sharing</li>
            </ul>
            <Cards />
        </section>
		</main>
	}
}

export default Main