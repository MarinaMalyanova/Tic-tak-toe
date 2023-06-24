import PropTypes from 'prop-types';
import styles from './newGameButton.module.css';

export function NewGameButton(props) {
	return (
		<button className={styles.buttonBegin} onClick={props.onClick}>
			Начать заново
		</button>
	);
}
NewGameButton.prototype = {
	onClick: PropTypes.func,
};
