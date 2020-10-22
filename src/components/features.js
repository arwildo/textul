import React from 'react';
import ToUpper from './assets/img/toUpper.png';
import ToLower from './assets/img/toLower.png';
import abcAbc from './assets/img/abc-Abc.png';
import abccba from './assets/img/abc-cba.png';

class Features extends React.Component {
	render() {
		return (
			<div className="py-12 bg-white">
				<div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="lg:text-center">
						<p className="text-base leading-6 text-gray-600 font-semibold tracking-wide uppercase">
							Features
						</p>
						<h3 className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
							TexTul
						</h3>
						<p className="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">Tools for your Text</p>
					</div>
					<br />

					<div className="max-w-4xl mx-auto">
						<ul className="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
							<li>
								<div className="flex">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center h-12 w-12 rounded-md border-b-4 border-gray-600 text-white">
											<img className="w-8 mr-2 ml-2" src={ToUpper} />
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-lg leading-6 font-medium text-gray-900">To Upper</h4>
										<p className="mt-2 text-base leading-6 text-gray-500">
											Convert Text to uppercase.
										</p>
									</div>
								</div>
							</li>
							<li className="mt-10 md:mt-0">
								<div className="flex">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center h-12 w-12 rounded-md border-b-4 border-gray-600 text-white">
											<img className="w-8 mr-2 ml-2" src={ToLower} />
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-lg leading-6 font-medium text-gray-900">To Lower</h4>
										<p className="mt-2 text-base leading-6 text-gray-500">
											Convert text to lowercase.
										</p>
									</div>
								</div>
							</li>
							<li className="mt-10 md:mt-0">
								<div className="flex">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center h-12 w-12 rounded-md border-b-4 border-gray-600 text-white">
											<img className="w-15" src={abcAbc} />
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-lg leading-6 font-medium text-gray-900">Caps on First</h4>
										<p className="mt-2 text-base leading-6 text-gray-500">
											Capitalize all the first letters on every word.
										</p>
									</div>
								</div>
							</li>
							<li className="mt-10 md:mt-0">
								<div className="flex">
									<div className="flex-shrink-0">
										<div className="flex items-center justify-center h-12 w-12 rounded-md border-b-4 border-gray-600 text-white">
											<img className="w-15" src={abccba} />
										</div>
									</div>
									<div className="ml-4">
										<h4 className="text-lg leading-6 font-medium text-gray-900">Reverse</h4>
										<p className="mt-2 text-base leading-6 text-gray-500">
											Reverse the text from back to front.
										</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default Features;
