import React from 'react';

function Footer() {
	return (
		<>
			<footer className="flex flex-row items-center justify-center lg:rounded-lg lg:mt-4">
				<span className="text-gray-900 dark:text-white font-semibold">
					Copyright &copy; {new Date().getFullYear()}, Sérgio Félix
				</span>
			</footer>
		</>
	);
}

export default Footer;
