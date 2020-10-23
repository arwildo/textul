import React from 'react';
import Logo from './assets/img/logo.png';

class Footer extends React.Component {
	getYear() {
		return new Date().getFullYear();
	}
	render() {
		return (
			<footer className="flex justify-center px-4 text-gray-600 bg-white">
				<div className="container py-6">
					<div className="flex flex-col items-center justify-between mt-6 md:flex-row">
						<div>
							<a href="#" className="text-xl font-bold">
								<img className="w-8" src={Logo} />
							</a>
						</div>
						<div>
							<p className="text-sm m-3">
								<a href="https://arwildo.github.io">Arwildo</a> &copy; {this.getYear()}
							</p>
						</div>
						<div className="-mx-4">
							<div className="flex mt-4 md:m-0">
								<a href="#" className="px-4 text-sm">
									About
								</a>
								<a href="#" className="px-4 text-sm">
									Blog
								</a>
								<a href="#" className="px-4 text-sm">
									News
								</a>
								<a href="#" className="px-4 text-sm">
									Contact
								</a>
							</div>
						</div>
					</div>
				</div>
			</footer>
		);
	}
}

export default Footer;
