import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Tools from './components/tools';
import Features from './components/features';
import Footer from './components/footer';
import './components/assets/img/logo.png';

const Index = () => {
	return [ <Tools />, <Features />, <Footer /> ];
};

ReactDOM.render(<Index />, document.getElementById('index'));
