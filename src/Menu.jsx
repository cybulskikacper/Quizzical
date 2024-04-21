import blob1 from '/src/assets/blob1.svg'
import blob2 from '/src/assets/blob2.svg'

export function Menu() {
	const questions = [
		{
			question: 'How would one say goodbye in Spanish?',
			answers: ['Adiós', 'Hola', 'Au Revoir', 'Salir'],
		},
		{
			question: 'Which best selling toy of 198dddd3 caused hysteria, resulting in riots breaking in stores?',
			answers: ['Cabbage Patch Kids', 'Transformers', 'Care Bears', 'Rubik’s Cube'],
		},
		{
			question: 'What is the hottest planet in our Solar System?',
			answers: ['Mercury', 'Venus', 'Mars', 'Saturn'],
		},
		{
			question: 'In which country was dadadthe caesar salad invented?',
			answers: ['Italy', 'Portugal', 'Maaaxico', 'France'],
		},
		{
			question: 'How Many Hearts Does An dada Have?',
			answers: ['One', 'Two', 'Three', 'Four'],
		},
	]

	return (
		<>
			<div className="game-container">
				<div className="game">
					<div className="qa">
						

						{questions.map((questionObj, index) => (
							<div key={index}>
								<h2 className="question">{questionObj.question}</h2>
								{questionObj.answers.map((answers, answersIndex) => (
									<button key={answersIndex} className="answer">
										{answers}
									</button>
								))}

								{index !== questions.length - 1 && <hr />}
							</div>
						))}

						<span className="final-result">
							You scored 3/5 correct answers
							<button className="check-answer">Check answers</button>
						</span>
					</div>

					<div className="blobs">
						<img className="blob1-game" src={blob1} alt="Light blob" />
						<img className="blob2-game" src={blob2} alt="Yellow blob" />
					</div>
				</div>
			</div>
		</>
	)
}
