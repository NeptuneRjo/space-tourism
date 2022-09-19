import React, { useState } from 'react'
import './style.css'

const DestinationItem = ({ destinations }) => {
	const [destinationIndex, setDestinationIndex] = useState(0)
	const destination = destinations[destinationIndex]

	return (
		<div className='destination_item-main'>
			<div className='destination_item-image'>
				<img src={`${destination.images.png}`} alt={`${destination.name}`} />
			</div>
			<div className='destination_item-content'>
				<div className='destination_item-tabs'>
					{destinations.map((item, index) => (
						<div
							className={`tabs ${destinationIndex === index ? 'active' : ''}`}
							onClick={() => setDestinationIndex(index)}
						>
							{item.name.toUpperCase()}
						</div>
					))}
				</div>
				<div className='destination_item-body'>
					<div className='destination_item-name heading-2'>
						{destination.name.toUpperCase()}
					</div>
					<div className='destination_item-bio body-text'>
						{destination.description}
					</div>
					<div className='destination_item-stats-container'>
						<div className='destination_item-stats'>
							<div className='subheading-2'>AVG. DISTANCE</div>
							<div className='subheading-1'>
								{destination.distance.toUpperCase()}
							</div>
						</div>
						<div className='destination_item-stats'>
							<div className='subheading-2'>EST. TRAVEL TIME</div>
							<div className='subheading-1'>
								{destination.travel.toUpperCase()}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default DestinationItem
