import React, { Component } from 'react'
import { Container } from 'reactstrap'

// Here's the bug, uncomment to break the scss from a.js
// import 'stylesheets/error.scss'

class Error extends Component {
	static async getInitialProps({ res, err, query }) {
		// console.log('query is:', query)
		const statusCode = res ? res.statusCode : err ? err.statusCode : null
		return { statusCode }
	}

	render() {
		return (
			<Container className={'error-container'} fluid={true}>
				<p style={{color: '#222'}}>
					{this.props.statusCode
						? `An error ${this.props.statusCode} occurred on server`
						: 'An error occurred on client'}
				</p>
			</Container>
		)
	}
}

export default Error