import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Squares from './Squares';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Squares />
	</React.StrictMode>,
);

reportWebVitals();
