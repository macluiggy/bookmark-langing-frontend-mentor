import React, {Component} from 'react';
//images
import chrome from './images/logo-chrome.svg';
import firefox from './images/logo-firefox.svg';
import opera from './images/logo-opera.svg';
//json
import extensions from './data/extensions.json';


class Extensions extends Component {
	render() {
		let browsers = [chrome, firefox, opera];
		return extensions.map((extension, i) => {
			return <article className='extension_container' key={extension.id}>
                <figure>
                    <img src={browsers[i]} alt={browsers[i]}/>
                    <figcaption>
                        <h3>Add to {extension.browser}</h3>
                        <p>Minimum version {extension.version}</p>
                    </figcaption>
                </figure>
                <button>Add & Install Extension</button>
            </article>
		})
	}
}

export default Extensions;