import React, { Component } from 'react';
//css
import './css/main.css';
//component
import Cards from './cards'
import Extensions from './extensions.js'
import Questions from './questions'


class Main extends Component {

	render() {
		return <main>
		<section className='main_section1'>
            <h2>Features</h2>
            <p>Our aim is to make it quick and easy for you to access your favourite websites.
                Your bookmarks sync between your devices so you can access them on the go.</p>
        </section>
        <Cards />
        <section className='main_section3'>
            <article className='download_the_extension'>
                <h2>Download the extension</h2>
                <p>We’ve got more browsers in the pipeline. Please do let us know if you’ve
                    got a favourite you’d like us to prioritize.</p>
            </article>
            <Extensions />
        </section>
        <section className='main_section4'>
            <article className='frequently_asked_questions'>
                <h2>Frequently Asked Questions</h2>
                <p>Here are some of our FAQs. If you have any other questions you’d like
                    answered please feel free to email us.</p>
            </article>
            <section className='questions_container'>
                <Questions />
            </section>
            <button>More Info</button>
        </section>
		</main>
	}
}

export default Main