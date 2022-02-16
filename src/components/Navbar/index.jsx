import React from 'react';
import { Link } from 'react-router-dom';

/* Hooks */
import useDarkMode from '../../hooks/useDarkMode';

/* Icons */
import { SunIcon, MoonIcon } from '@heroicons/react/solid';

function Navbar() {
	const [colorTheme, setTheme] = useDarkMode();
	return (
		<>
			<header className="flex items-center justify-center">
				<div className="container px-6 py-4 justify-between items-center flex flex-row gap-5 lg:rounded-lg lg:mt-4 bg-slate-800 dark:bg-slate-200">
					<Link to="/" className="inline-flex items-center font-bold hover:opacity-70">
						<h1 className="text-4xl font-bold text-white dark:text-gray-900">Weather</h1>
						<SunIcon className='ml-2 w-12 h-12 text-yellow-300' />
					</Link>
					<div className='flex'>
						{
							colorTheme === 'light' ? (
								<>
									<div className='bg-slate-200 dark:bg-slate-800 rounded-lg px-1 py-1'>
										<MoonIcon className='w-10 h-10 text-gray-900 dark:text-white hover:opacity-70 cursor-pointer' onClick={() => setTheme(colorTheme)} />
									</div>
								</>
							) : (
								<>
									<div className='bg-slate-200 dark:bg-slate-800 rounded-lg px-1 py-1'>
										<SunIcon className='w-10 h-10 text-gray-900 dark:text-white hover:opacity-70 cursor-pointer' onClick={() => setTheme(colorTheme)} />
									</div>
								</>
							)
						}
					</div>
				</div>
			</header>
		</>
	);
}

export default Navbar;
