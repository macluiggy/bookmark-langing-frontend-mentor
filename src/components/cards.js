import React, { Component } from 'react';
//images
import illustration1 from './images/illustration-features-tab-1.svg'

class Cards extends Component {

	render() {
		if (true) {
			return <article className='card_container'>
				<firgure className='illustration_container'>
					<img src={illustration1} alt="illustration features tab 1" />
				</firgure>
                <article className='card_description'>
                	<h2>Bookmark in one click</h2>
                	<p>Organize your bookmarks however you like. Our simple drag-and-drop interface
                    gives you complete control over how you manage your favourite sites.</p>
                	<button>More Info</button>
                </article>
            </article>
		} else if (false) {
			return <article>
                <h2>Intelligent search</h2>
                <p>Our powerful search feature will help you find saved sites in no time at all.
                    No need to trawl through all of your bookmarks.</p>
                <button>More Info</button>
            </article>
		} else {
			return <article>
                <h2>Share your bookmarks</h2>
                <p>Easily share your bookmarks and collections with others. Create a shareable
                    link that you can send at the click of a button.</p>
                <button>More Info</button>
            </article>
		}
	}
}

export default Cards