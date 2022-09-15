import React from 'react'
import data from '../../data.json'
import './destination.css'
import { DestinationItem } from '../../Components'

const Destination = ({}) => {
	const { destinations } = data

	return (
		<div className='destination-main'>
			<div className='destination heading-5'>
				<span>01</span>PICK YOUR DESTINATION
			</div>
			<div className='destination-container'>
				<DestinationItem destinations={destinations} />
			</div>
		</div>
	)
}

export default Destination
