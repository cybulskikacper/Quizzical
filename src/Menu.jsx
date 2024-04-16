import blob1 from '/src/assets/blob1.svg'
import blob2 from '/src/assets/blob2.svg'

export default function Menu() {
	return (
		<>
			<div className="game-container">
				<div className="game">
					<div className="qa">
						<h2 className="question"> How would one say goodbye in Spanish?</h2>
							

						<button className="answer">Adiós</button>
						<button className="answer">Hola</button>
						<button className="answer">Au Revoir</button>
						<button className="answer">Salir</button>
						<hr />
						<h2 className="question">
							{' '}
							Which best selling toy of 1983 caused hysteria, resulting in riots breaking in stores?
						</h2>

						<button className="answer">Cabbage Patch Kids</button>
						<button className="answer">Transformers</button>
						<button className="answer">Care Bears</button>
						<button className="answer">Rubik’s Cube</button>
						<hr />
						<h2 className="question"> What is the hottest planet in our Solar System?</h2>

						<button className="answer">Mercury</button>
						<button className="answer">Venus</button>
						<button className="answer">Mars</button>
						<button className="answer">Saturn</button>
						<hr />
						<h2 className="question"> In which country was the caesar salad invented?</h2>

						<button className="answer">Italy</button>
						<button className="answer">Portugal</button>
						<button className="answer">Mexico</button>
						<button className="answer">France</button>
						<hr />

						<h2 className="question">How Many Hearts Does An Octopus Have?</h2>

						<button className="answer">One</button>
						<button className="answer">Two</button>
						<button className="answer">Three</button>
						<button className="answer">Four</button>
					</div>	

						<button className='check-answer'>Check Answers</button>

					<hr />
					<div className="blobs">
						<img className="blob1-game" src={blob1} alt="Light blob" />
						<img className="blob2-game" src={blob2} alt="Yellow blob" />
					</div>
				</div>
			</div>
		</>
	)
}
