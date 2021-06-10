import React, { Component } from 'react';
//css
import './css/footer.css'


class Footer extends Component {
	render() {
		return <footer>
        <section className='contact'>
            <article>
            	<h4>35,000+ already joined</h4>
	            <label for='email'>Stay up-to-date with what we’re doing</label>
	            <input type="email" name="email" />
	            <input type="button" name="submit" value='Contact Us' />
            </article>
        </section>
        <section>
            <figure>
                <img src="" alt='' />
            </figure>
            <ul>
                <li>Features</li>
                <li>Pricing</li>
                <li>Contact</li>
            </ul>
            <figure>
                <img src="" alt="" />
                <img src="" alt="" />
            </figure>
        </section>
    </footer>
	}
}

export default Footer;