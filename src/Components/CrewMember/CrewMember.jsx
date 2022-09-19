import React, { useState } from 'react'
import './style.css'

const CrewMember = ({ crew }) => {
	const [crewIndex, setCrewIndex] = useState(0)
	const crewMember = crew[crewIndex]

	return (
		<div className='crew_member-main'>
			<div className='crew_member-image'>
				<img src={`${crewMember.images.png}`} alt={`${crewMember.name}`} />
			</div>
			<div className='crew_member-content'>
				<div className='crew_member-slider'>
					{crew.map((member, index) => (
						<div
							className={`slider-1 ${crewIndex === index ? 'active' : ''}`}
							onClick={() => setCrewIndex(index)}
						/>
					))}
				</div>
				<div className='crew_member-body'>
					<div className='crew_member-role heading-4'>{crewMember.role}</div>
					<div className='crew_member-name heading-3'>{crewMember.name}</div>
					<div className='crew_member-bio body-text'>{crewMember.bio}</div>
				</div>
			</div>
		</div>
	)
}

export default CrewMember
