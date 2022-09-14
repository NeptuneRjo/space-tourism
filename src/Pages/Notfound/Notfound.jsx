import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './notfound.css'

export default class Notfound extends Component {
	render() {
		return (
			<div className='not_found-main'>
				<div className='not_found heading-3'>
					Error! This page does not exist.
				</div>
				<Link className='not_found subheading-2' to='/'>
					Try this page instead...
				</Link>
			</div>
		)
	}
}
