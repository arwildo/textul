import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Tools from './components/tools';
import Features from './components/features';
import Footer from './components/footer';
import ReactGA from 'react-ga';
import './components/assets/img/logo.png';

const Index = () => {
	return [ <Tools />, <Features />, <Footer /> ];
};

ReactGA.initialize('UA-51659765-2');
ReactGA.pageview(window.location.pathname + window.location.search);
ReactDOM.render(<Index />, document.getElementById('index'));
