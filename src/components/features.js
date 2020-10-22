import React from 'react';
import ToUpper from './assets/img/toUpper.png';
import ToLower from './assets/img/toLower.png';
import abcAbc from './assets/img/abc-Abc.png';
import abccba from './assets/img/abc-cba.png';

class Features extends React.Component {
	render() {
		return (
			<div class="py-12 bg-white">
				<div class="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
					<div class="lg:text-center">
						<p class="text-base leading-6 text-gray-600 font-semibold tracking-wide uppercase">Features</p>
						<h3 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10">
							TexTul
						</h3>
						<p class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto">Tools for your Text.</p>
					</div>

					<div class="mt-10">
						<ul class="md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
							<li>
								<div class="flex">
									<div class="flex-shrink-0">
										<div class="flex items-center justify-center h-12 w-12 rounded-md border-b-4 border-gray-500 text-white">
											<img className="w-8 mr-2 ml-2" src={ToUpper} />
										</div>
									</div>
									<div class="ml-4">
										<h4 class="text-lg leading-6 font-medium text-gray-900">To Upper</h4>
										<p class="mt-2 text-base leading-6 text-gray-500">
											Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
											perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
										</p>
									</div>
								</div>
							</li>
							<li class="mt-10 md:mt-0">
								<div class="flex">
									<div class="flex-shrink-0">
										<div class="flex items-center justify-center h-12 w-12 rounded-md border-b-4 border-gray-500 text-white">
											<img className="w-8 mr-2 ml-2" src={ToLower} />
										</div>
									</div>
									<div class="ml-4">
										<h4 class="text-lg leading-6 font-medium text-gray-900">To Lower</h4>
										<p class="mt-2 text-base leading-6 text-gray-500">
											Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
											perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
										</p>
									</div>
								</div>
							</li>
							<li class="mt-10 md:mt-0">
								<div class="flex">
									<div class="flex-shrink-0">
										<div class="flex items-center justify-center h-12 w-12 rounded-md border-b-4 border-gray-500 text-white">
											<img className="w-15" src={abcAbc} />
										</div>
									</div>
									<div class="ml-4">
										<h4 class="text-lg leading-6 font-medium text-gray-900">Caps on First</h4>
										<p class="mt-2 text-base leading-6 text-gray-500">
											Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
											perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
										</p>
									</div>
								</div>
							</li>
							<li class="mt-10 md:mt-0">
								<div class="flex">
									<div class="flex-shrink-0">
										<div class="flex items-center justify-center h-12 w-12 rounded-md border-b-4 border-gray-500 text-white">
											<img className="w-15" src={abccba} />
										</div>
									</div>
									<div class="ml-4">
										<h4 class="text-lg leading-6 font-medium text-gray-900">Reverse</h4>
										<p class="mt-2 text-base leading-6 text-gray-500">
											Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit
											perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.
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
