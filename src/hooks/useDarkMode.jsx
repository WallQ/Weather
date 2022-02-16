import React from 'react';

const useDarkMode = () => {
	const [theme, setTheme] = React.useState(localStorage.theme ? localStorage.theme : 'light');
	const colorTheme = theme === 'light' ? 'dark' : 'light';
	React.useEffect(() => {
		const root = document.documentElement;

		root.classList.remove(colorTheme);
		root.classList.add(theme);
		localStorage.setItem('theme', theme);
	}, [theme, colorTheme]);
	return [colorTheme, setTheme];
}

export default useDarkMode;
