import styles from './displayLayout.module.css';
import PropTypes from 'prop-types';

export const DisplayLayout = ({ player, xIsNext }) => {
	const display = player
		? `Победитель: ${player}`
		: `Следующий ход: ${xIsNext ? 'X' : '0'}`;
	return <div className={styles.display}>{display}</div>;
};
DisplayLayout.propTypes = {
	player: PropTypes.string,
	xIsNext: PropTypes.bool,
};
