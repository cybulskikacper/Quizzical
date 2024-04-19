import { useState, useEffect } from 'react'
import { nanoid } from 'nanoid'
import Menu from './Menu'
import Header from '../components/Header'

function App() {
	const [started, setStarted] = useState(false)

	return (
		<>
			<div className="main-content">{started ? <Menu /> : <Header />}</div>
		</>
	)
}

export default App
