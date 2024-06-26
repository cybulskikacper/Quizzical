import blob1 from '/src/assets/blob1.svg'
import blob2 from '/src/assets/blob2.svg'
import { useState, useEffect } from 'react'
import { decode } from 'html-entities'

export function Menu() {
	// questions returned from API
	const [questions, setQuestions] = useState([])
	// mapping each question & its answers
	const [questionsAndAnswers, setQuestionsAndAnswers] = useState([])
	const [warning, setWarning] = useState(false)
	const [correctAnswers, setCorrectAnswers] = useState([])
	const [showResult, setShowResult] = useState(false)

	const fetchQuestionsAndFormatData = () => {
		fetch('https://opentdb.com/api.php?amount=5')
			.then(res => {
				if (!res.ok) {
					throw new Error('Network response was not ok')
				}
				return res.json()
			})
			.then(data => {
				console.log(data)
				if (data.results && data.results.length > 0) {
					const formattedData = data.results.map(questionObj => ({
						question: questionObj.question,
						shuffledAnswers: shuffle([...questionObj.incorrect_answers, questionObj.correct_answer]),
						correctAnswer: questionObj.correct_answer,
						selectedAnswers: '',
					}))
					setQuestionsAndAnswers(formattedData)
				} else {
					console.error('No data or empty array returned from API')
					// Handle the case when no data is returned from the API
				}
			})
			.catch(error => {
				console.error('Error fetching data from API:', error)
				// Handle the fetch error
			})
	}

	useEffect(() => {
		fetchQuestionsAndFormatData()
	}, [questions])

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

	// choosing answer
	function updateAnswer(answer, currentQuestion) {
		const selected = questionsAndAnswers.map(questionObject => {
			return questionObject.question === currentQuestion
				? { ...questionObject, selectedAnswers: answer }
				: questionObject
		})
		setQuestionsAndAnswers(selected)
	}

	// checking answers
	function checkAnwers() {
		// if  answers are not selected, thanks to this function below
		// user after clicking button "Check answers", will be informed that not every answer was selected

		const unansweredQuestions = questionsAndAnswers.some(question => question.selectedAnswers === '')
		setWarning(unansweredQuestions)

		// if user has selected all the answers, there will be a paragraph which will be showing how many correct answers user has scored
		if (!unansweredQuestions) {
			questionsAndAnswers.forEach(correctAnswer => {
				if (correctAnswer.selectedAnswers === correctAnswer.correctAnswer) {
					// by using clg i've seen that numbers count like an array from 0, thats why I added +1 so it's starting by 1
					setCorrectAnswers(prevCorrectAnswer => prevCorrectAnswer + 1)
				}
			})
			setShowResult(true)
		}
	}

	function resetGame() {
		setQuestions([])
		setQuestionsAndAnswers([])
		setCorrectAnswers([])
		setShowResult(false)
	}

	return (
		<>
			<div className="game-container">
				<div className="game">
					<div className="qa">
						{questionsAndAnswers.length > 0 &&
							questionsAndAnswers.map((question, index) => (
								<div key={index}>
									<h2 className="question">{decode(question.question)}</h2>
									{question.shuffledAnswers.map((answer, answerIndex) => (
										<button
											key={answerIndex}
											onClick={() => updateAnswer(answer, question.question)}
											// if user clicked answer, change it color to "selected"
											// if user clicked "check answers" and the answer he choosed is correct, change bgc color of selected answer to green (class - correct)
											// if user clicked "check answers" and the answer he choosed is incorrect, change bgc color of selected answer to red (class - incorrect)

											className={`answer ${answer === question.selectedAnswers ? 'selected' : ''}
											${showResult && answer === question.correctAnswer ? 'correct' : ''}
											${showResult && answer === question.selectedAnswers && answer !== question.correctAnswer ? 'incorrect' : ''}`}>
											{decode(answer)}
										</button>
									))}
									{index !== questionsAndAnswers.length - 1 && <hr />}
								</div>
							))}
					</div>

					{showResult ? (
						<div className="correct-answers">
							<p className="score">
								You scored <span className="bold ">{correctAnswers.length} / 5</span> correct answers
							</p>
						</div>
					) : null}
					<span className="final-result">
						{warning && <p className="not-answered">You have not answered all questions yet.</p>}
						<button onClick={showResult ? resetGame : checkAnwers} className="check-answer">
							{showResult ? 'Play again' : 'Check answers'}
						</button>
					</span>

					<div className="blobs">
						<img className="blob1-game" src={blob1} alt="Light blob" />
						<img className="blob2-game" src={blob2} alt="Yellow blob" />
					</div>
				</div>
			</div>
		</>
	)
}
