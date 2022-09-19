import './App.css'
import { Crew, Destination, Home, Technology, Notfound } from './Pages'
import { Navbar } from './Components'
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import data from './data.json'

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar navItems={data?.navbar} />
				<div className='space__app-content'>
					<Routes>
						<Route path='/home' element={<Home />} />
						<Route path='/destination' element={<Destination />} />
						<Route path='/crew' element={<Crew crewMembers={data?.crew} />} />
						<Route path='/technology' element={<Technology />} />
						<Route exact path='/' element={<Navigate replace to='/home' />} />
						<Route path='*' element={<Notfound />} />
					</Routes>
				</div>
			</div>
		</Router>
	)
}

export default App
