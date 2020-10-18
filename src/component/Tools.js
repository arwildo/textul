import React from 'react';

class Tools extends React.Component {
	constructor(props) {
		super();

		this.state = {
			text: []
		};

		this.allCaps = this.allCaps.bind(this);
	}
	allCaps() {
		if (this.nameTextInput !== null) {
			this.setState({
				text: this.nameTextInput.value.toUpperCase()
			});
		}
	}
	render() {
		return (
			<div className="row">
				<div className="col-md-4 col-md-offset-2">
					<br />
					<input
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
				</div>
				<br />

				<div className="row">
					<div className="col-md-4 col-md-offset-2">
						<input type="text" value={this.state.text} />
					</div>
				</div>
			</div>
		);
	}
}

export default Tools;
