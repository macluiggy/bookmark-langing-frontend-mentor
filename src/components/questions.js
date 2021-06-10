import React, { Component } from 'react';
import questions from './data/questions.json'


class Questions extends Component {
	render() {
		return questions.map((question, i) => {
			return (<details className={`question_container q${question.id}`} key={i}>
			                    <summary>{question.question}</summary>
			                    <p>{question.answer}</p>
	                </details>)
		})
	}
}

export default Questions