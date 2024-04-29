import blob1 from '/src/assets/blob1.svg'
import blob2 from '/src/assets/blob2.svg'

import { useState, useEffect } from 'react'
import { decode } from 'html-entities'

export function Menu() {
	const [questions, setQuestions] = useState([])
	const [questionsAndAnswers, setQuestionsAndAnswers] = useState([])

	useEffect(() => {
		fetch('https://opentdb.com/api.php?amount=5')
			.then(res => res.json())
			.then(data => {
				setQuestions(data.results)
				setQuestionsAndAnswers(
					data.results.map(questionObj => {
						return {
							question: questionObj.question,
							shuffledAnswers: shuffle([...questionObj.incorrect_answers, questionObj.correct_answer]),
							correctAnswer: questionObj.correct_answer,
							selectedAnswers: '',
						}
					})
				)
			})
	}, [])

	function updateAnswer(answer, currentQuestion) {
		const selected = questionsAndAnswers.map(questionObject => {
			return questionObject.question === currentQuestion
				? { ...questionObject, selectedAnswers: answer }
				: questionObject
		})

		setQuestionsAndAnswers(selected)
	}

	// Function to shuffle answers
	function shuffle(array) {
		let currentIndex = array.length

		// While there remain elements to shuffle...
		while (currentIndex !== 0) {
			// Pick a remaining element...
			let randomIndex = Math.floor(Math.random() * currentIndex)
			currentIndex--

			// And swap it with the current element.
			;[array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]]
		}

		return array
	}

	console.log(questionsAndAnswers)

	return (
		<>
			<div className="game-container">
				<div className="game">
					<div className="qa">
						{questionsAndAnswers.map((question, index) => (
							<div key={index}>
								<h2 className="question">{decode(question.question)}</h2>

								{question.shuffledAnswers.map((answer, answerIndex) => (
									<button
										className={`answer ${answer === question.selectedAnswers ? 'selected' : ''}  `}
										key={answerIndex}
										onClick={() => updateAnswer(answer, question.question)}>
										{decode(answer)}
									</button>
								))}

								{index !== questionsAndAnswers.length - 1 && <hr />}
							</div>
						))}
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
