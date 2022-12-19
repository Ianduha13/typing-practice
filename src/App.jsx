import { useEffect, useState } from "react"
import randomWords from "random-words"
const NUMB_OF_WORDS = 200
const SECONDS = 60

function App() {
	const [words, setWords] = useState([])
	useEffect(() => {
		setWords(generateWords())
	}, [])
	const generateWords = () => {
		return new Array(NUMB_OF_WORDS).fill(null).map(() => randomWords())
	}

	return (
		<div className='App'>
			<div className='section'>
				<div className='is-size-1 has-text-centered has-text-primary'>
					<h2>60</h2>
				</div>
			</div>
			<div className='control is-expanded section'>
				<input type='text' className='input' />
			</div>
			<div className='section'>
				<button className='button is-info is-fullwidth'>Start</button>
			</div>
			<div className='section'>
				<div className='card'>
					<div className='card-content'>
						<div className='content'>
							{words.map((word, i) => {
								;<>
									<span>{word}</span>
									<span> </span>
								</>
							})}
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
