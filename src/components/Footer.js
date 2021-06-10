import React, { Component } from 'react';
//css
import './css/footer.css';
//images
import facebook from './images/icon-facebook.svg';
import twitter from './images/icon-twitter.svg';


class Footer extends Component {
	render() {
		return <footer>
        <section className='contact'>
            <article>
            	<h4>35,000+ already joined</h4>
	            <label htmlFor='email'>Stay up-to-date with what we’re doing</label>
	            <input className='email' type="email" name="email" placeholder='Enter your email address'/>
	            <input className='contact_us' type="button" name="submit" value='Contact Us' />
            </article>
        </section>
        <section className='final'>
            <figure className='logo_container'>
                <img src='https://leonidasesteban.github.io/bookmark-landing/static/images/logo-bookmark-footer.svg' alt='bookmark logo' />
            </figure>
            <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
            <figure className='social_container'>
                <img src={facebook} alt="facebook logo" />
                <img src={twitter} alt="twitter logo" />
            </figure>
        </section>
    </footer>
	}
}

export default Footer;