import blob1 from '/src/assets/blob1.svg'
import blob2 from '/src/assets/blob2.svg'

import { useState, useEffect } from 'react'

export function Menu() {
	const [quizApi, setQuizApi] = useState([])

	useEffect(() => {
		fetch('https://opentdb.com/api.php?amount=5')
			.then(res => res.json())
			.then(data => setQuizApi(data.results))
			.catch(error => console.error('Error while fetching the quiz data'), error)
	}, [])

	console.log(quizApi)

	return (
		<>
			<div className="game-container">
				<div className="game">
					<div className="qa">
						{quizApi.map((question, index) => (
							<div key={index}>
								<h2>{question.question}</h2>
								<button>{question.correct_answer}</button>

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
