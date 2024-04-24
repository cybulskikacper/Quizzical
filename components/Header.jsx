import blob1 from '/src/assets/blob1.svg'
import blob2 from '/src/assets/blob2.svg'

export default function Header({ StartQuiz }) {
	return (
		<>
			<header>
				<h1 className="title">Quizzical</h1>
				<p className="description">Are you ready for a quiz?</p>
				<button className="start" onClick={StartQuiz}>Start quiz	</button>

				<div className="blobs">
					<img className="blob1" src={blob1} alt="Light blob" />
					<img className="blob2" src={blob2} alt="Yellow blob" />
				</div>
			</header>
		</>
	)
}
