import { nanoid } from 'nanoid'

function App() {
	return (
		<>
			<header>
				<h1 className="title">Quizzical</h1>
				<p className="description">Are you ready for a quiz?</p>
				<button className="start">Start quiz</button>

				<div className="blobs">
					<img className="blob1" src="./src/assets/blob1.svg" alt="Light blob" />
					<img className="blob2" src="./src/assets/blob2.svg" alt="Yellow blob" />
				</div>
			</header>
		</>
	)
}

export default App
