import { useState, useEffect } from 'react'
import { Menu } from '../components/Menu'
import Header from '../components/Header'

function App() {
	const [isStarted, isSetStarted] = useState(false)

	const handleStartQuiz = () => {
		isSetStarted(true)
	}

	return <div className="main-content">{isStarted ? <Menu /> : <Header StartQuiz={handleStartQuiz} />}</div>
}

export default App
