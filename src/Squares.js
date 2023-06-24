import { useState } from 'react';
import styles from './Squares.module.css';
import { NewGameButton } from './newGameButton';
import { DisplayLayout } from './displayLayout';
import { RenderSquareComponent } from './renderSquareComponent';

function Squares() {
	const [xIsNext, setXIsNext] = useState(true);
	const [square, setSquare] = useState(Array(9).fill(null));

	const handleClick = (i) => {
		const squareCopy = [...square];
		if (player || squareCopy[i]) return;
		squareCopy[i] = xIsNext ? 'X' : '0';
		setSquare(squareCopy);
		setXIsNext(!xIsNext);
	};

	const winnerCounter = (square) => {
		const lines = [
			[0, 1, 2],
			[3, 4, 5],
			[6, 7, 8],
			[0, 3, 6],
			[1, 4, 7],
			[2, 5, 8],
			[0, 4, 8],
			[2, 4, 6],
		];
		for (let i = 0; i < lines.length; i++) {
			const [a, b, c] = lines[i];
			if (square[a] && square[a] === square[b] && square[a] === square[c]) {
				return square[a];
			}
		}
		return null;
	};
	const player = winnerCounter(square);

	return (
		<>
			<div className={styles.field}>
				<DisplayLayout player={player} xIsNext={xIsNext} />
				<div className={`${styles.squares} `}>
					<RenderSquareComponent
						player={player}
						square={square}
						handleClick={handleClick}
						i={0}
					/>
					<RenderSquareComponent
						player={player}
						square={square}
						handleClick={handleClick}
						i={1}
					/>
					<RenderSquareComponent
						player={player}
						square={square}
						handleClick={handleClick}
						i={2}
					/>
					<RenderSquareComponent
						player={player}
						square={square}
						handleClick={handleClick}
						i={3}
					/>
					<RenderSquareComponent
						player={player}
						square={square}
						handleClick={handleClick}
						i={4}
					/>
					<RenderSquareComponent
						player={player}
						square={square}
						handleClick={handleClick}
						i={5}
					/>
					<RenderSquareComponent
						player={player}
						square={square}
						handleClick={handleClick}
						i={6}
					/>
					<RenderSquareComponent
						player={player}
						square={square}
						handleClick={handleClick}
						i={7}
					/>
					<RenderSquareComponent
						player={player}
						square={square}
						handleClick={handleClick}
						i={8}
					/>
				</div>
			</div>
			<NewGameButton
				onClick={() => {
					setSquare(Array(9).fill(null));
					setXIsNext(true);
				}}
				buttonBegin={styles.buttonBegin}
			/>
		</>
	);
}

export default Squares;
