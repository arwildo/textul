import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Tools from './components/tools';
import './components/assets/img/logo.png';

const Index = () => {
	return <Tools />;
};

ReactDOM.render(<Index />, document.getElementById('index'));
