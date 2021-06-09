import React, { Component } from 'react';
//css
import './css/main.css'


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
            <article>
                <h2>Bookmark in one click</h2>
                <p>Organize your bookmarks however you like. Our simple drag-and-drop interface
                    gives you complete control over how you manage your favourite sites.</p>
                <button>More Info</button>
            </article>
            <article>
                <h2>Intelligent search</h2>
                <p>Our powerful search feature will help you find saved sites in no time at all.
                    No need to trawl through all of your bookmarks.</p>
                <button>More Info</button>
            </article>
            <article>
                <h2>Share your bookmarks</h2>
                <p>Easily share your bookmarks and collections with others. Create a shareable
                    link that you can send at the click of a button.</p>
                <button>More Info</button>
            </article>
        </section>
		</main>
	}
}

export default Main