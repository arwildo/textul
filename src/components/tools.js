import React from 'react';
import Logo from './assets/img/logo.png';
import ToUpper from './assets/img/toUpper.png';
import ToLower from './assets/img/toLower.png';
import abcAbc from './assets/img/abc-Abc.png';
import abccba from './assets/img/abc-cba.png';
import Copy from './assets/img/copy.png';
import Trash from './assets/img/trash.png';

class Tools extends React.Component {
	constructor(props) {
		super();

		this.state = {
			text: []
		};

		this.allCaps = this.allCaps.bind(this);
		this.allLows = this.allLows.bind(this);
		this.upperFirst = this.upperFirst.bind(this);
		this.reverseText = this.reverseText.bind(this);
		this.copyText = this.copyText.bind(this);
		this.clearText = this.clearText.bind(this);
	}

	// Convert to all to uppercase
	allCaps() {
		if (this.nameTextInput !== null) {
			this.setState({
				text: this.nameTextInput.value.toUpperCase()
			});
		}
	}

	// Convert to all to lowercase
	allLows() {
		if (this.nameTextInput !== null) {
			this.setState({
				text: this.nameTextInput.value.toLocaleLowerCase()
			});
		}
	}

	// Convert the first char in every word to uppercase
	upperFirst() {
		if (this.nameTextInput !== null) {
			let string = this.nameTextInput.value;
			function capitalizeFirstLetters(str) {
				return str.toLowerCase().replace(/^\w|\s\w/g, function(letter) {
					return letter.toUpperCase();
				});
			}

			this.setState({
				text: capitalizeFirstLetters(string)
			});
		}
	}
	// Reverse text abc to cba
	reverseText() {
		if (this.nameTextInput !== null) {
			this.setState({
				text: this.nameTextInput.value.split('').reverse().join('')
			});
		}
	}

	// Copy text to clipboard
	copyText() {
		if (this.nameTextOutput !== null) {
			this.nameTextOutput.select();
			document.execCommand('copy');
		}
	}

	// Clear the output text
	clearText() {
		if (this.nameTextOutput !== null) {
			this.setState({
				text: ''
			});
		}
	}

	render() {
		return (
			<div className="bg-gray-100">
				<div className="max-w-7xl mx-auto py-12 sm:px-6 lg:px-8">
					<div className="max-w-4xl mx-auto">
						<div className="bg-white shadow overflow-hidden sm:rounded-lg">
							<div className="px-4 py-5 border-b border-gray-200 sm:px-6">
								<img className="w-10 mb-5" src={Logo} />
								<div className="pl-3 pr-4 py-3 justify-center text-sm leading-5">
									<textarea
										type="text"
										placeholder="Input ... "
										ref={(ref) => (this.nameTextInput = ref)}
										className="transition-colors duration-100 ease-in-out text-gray-600 py-2 pr-6 pl-8 block w-full h-32 appearance-none leading-normal border border-transparent rounded focus:outline-none text-left select-none truncate focus:bg-white focus:border-gray-200 bg-gray-200"
									/>
									<br />
									<div className="flex justify-center">
										<br />
										<button
											type="button"
											className="m-1 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
											onClick={this.allCaps}
										>
											<img className="w-8 mr-2 ml-2" src={ToUpper} />
										</button>
										<button
											type="button"
											className="m-1 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
											onClick={this.allLows}
										>
											<img className="w-8 mr-2 ml-2" src={ToLower} />
										</button>
										<button
											type="button"
											className="m-1 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
											onClick={this.upperFirst}
										>
											<img className="w-20" src={abcAbc} />
										</button>
										<button
											type="button"
											onClick={this.reverseText}
											className="m-1 bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
										>
											<img className="w-20" src={abccba} />
										</button>
									</div>
									<br />
									<textarea
										type="text"
										placeholder="Output ... "
										ref={(ref) => (this.nameTextOutput = ref)}
										value={this.state.text}
										className="transition-colors duration-100 ease-in-out text-gray-600 py-2 pr-6 pl-8 block w-full h-32 appearance-none leading-normal border border-transparent rounded focus:outline-none text-left select-none truncate focus:bg-white focus:border-gray-200 bg-gray-200"
									/>
								</div>
								<div className="flex justify-center">
									<br />
									<button
										type="button"
										className="m-1 bg-white hover:bg-blue-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
										onClick={this.copyText}
									>
										<div className="flex justify-center">
											<img className="w-5 mr-2" src={Copy} />
											Copy
										</div>
									</button>
									<button
										type="button"
										className="m-1 bg-white hover:bg-red-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow"
										onClick={this.clearText}
									>
										<div className="flex justify-center">
											<img className="w-5 mr-2" src={Trash} />
											Clear
										</div>
									</button>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Tools;
