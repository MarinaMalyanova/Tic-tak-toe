import styles from './renderSquareComponent.module.css';
import PropTypes from 'prop-types';

export function RenderSquareComponent({ player, square, handleClick, i }) {
	return (
		<button
			className={`${styles.square} ${player ? styles.squareRed : styles.square}`}
			onClick={() => handleClick(i)}
		>
			{square[i]}
		</button>
	);
}
RenderSquareComponent.propTypes = {
	player: PropTypes.string,
	square: PropTypes.array,
	handleClick: PropTypes.func,
	i: PropTypes.number,
};
