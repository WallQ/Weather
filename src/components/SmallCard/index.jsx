import React from 'react';

function SmallCard({ date, icon, temperature, weatherType }) {
	return (
		<>
			<div className="bg-slate-800 dark:bg-slate-200 lg:rounded-lg flex flex-col grow gap-y-2 items-center justify-center py-16">
				<h1 className="text-3xl font-semibold text-white dark:text-gray-900">
					{weatherType}
				</h1>
				<img
					src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
					alt="icon"
				/>
				<h1 className="text-3xl font-bold text-white dark:text-gray-900">
					{temperature}º
				</h1>
				<h1 className="text-center text-2xl font-semibold text-white dark:text-gray-900">
					{date}
				</h1>
			</div>
		</>
	);
}

export default React.memo(SmallCard);
