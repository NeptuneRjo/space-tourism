import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri'
import './navbar.css'
import { Link } from 'react-router-dom'

const Navbar = ({ navItems }) => {
	const [toggleMenu, setToggleMenu] = useState(false)
	const [navIndex, setNavIndex] = useState(undefined)

	const links = ['home', 'destination', 'crew', 'technology']

	return (
		<div className='navbar-main'>
			<div className='navbar-desktop'>
				{links.map((item, index) => (
					<div className={`nav-text ${navIndex === index ? 'active' : ''}`}>
						<Link to={`/${item}`} onClick={() => setNavIndex(index)}>
							{item.toUpperCase()}{' '}
						</Link>
					</div>
				))}
			</div>
			<div className='navbar-mobile'>
				{toggleMenu ? (
					<RiCloseLine
						color='#d0d6f9'
						size={27}
						onClick={() => setToggleMenu(false)}
					/>
				) : (
					<RiMenu3Line
						color='#d0d6f9'
						size={27}
						onClick={() => setToggleMenu(true)}
					/>
				)}
				{toggleMenu && (
					<div className='navbar-mobile-content'>
						{links.map((item, index) => (
							<div className='navbar-item'>
								<Link
									className={`nav-text ${navIndex === index ? 'active' : ''}`}
									to={`/${item}`}
									onClick={() => setNavIndex(index)}
								>
									<span>{`0${index}`}</span>
									{item.toUpperCase()}
								</Link>
							</div>
						))}
					</div>
				)}
			</div>
		</div>
	)
}

export default Navbar
