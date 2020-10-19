import React from 'react';

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

	render() {
		return (
			<div className="row">
				<div className="col-md-4 col-md-offset-2">
					<br />
					<textarea
						type="text"
						placeholder="Input ... "
						ref={(ref) => (this.nameTextInput = ref)}
						className="form-control"
					/>
				</div>
				<div className="col-md-4">
					<br />
					<button type="button" className="btn btn-success" onClick={this.allCaps}>
						t-T
					</button>
					<button type="button" className="btn btn-success" onClick={this.allLows}>
						T-t
					</button>
					<button type="button" className="btn btn-success" onClick={this.upperFirst}>
						abc-Abc
					</button>
					<button type="button" className="btn btn-success" onClick={this.reverseText}>
						abc-cba
					</button>
				</div>
				<br />

				<div className="row">
					<div className="col-md-4 col-md-offset-2">
						<textarea type="text" placeholder="Output ... " value={this.state.text} />
					</div>
				</div>
			</div>
		);
	}
}

export default Tools;
