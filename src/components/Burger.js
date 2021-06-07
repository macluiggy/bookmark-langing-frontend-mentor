import React, { Component } from 'react';

export default class Burger extends Component {
	state = {
        clase: 'burger'
    }

    changeClass = () => {
        this.setState({
            clase: this.state.clase === 'burger' ? 'change' : 'burger'
        })
        this.props.changeNavListClass()
    }

    render() {
    	return <div id='burger' className={this.state.clase} onClick={this.changeClass}>
                <div class="bar1"></div>
                <div class="bar2"></div>
                <div class="bar3"></div>
            </div>
    }
}