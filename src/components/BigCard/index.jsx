import React from 'react';

function BigCard({ district, cardinalPoints, temperature, icon, skyType, date, wind, pressure, humidity, cloudiness, precipitation,}) {
	return (
		<>
			<div className="bg-slate-800 dark:bg-slate-200 lg:rounded-lg flex flex-col grow items-center justify-center py-12 gap-y-2">
				<h1 className="text-center text-3xl font-bold text-white dark:text-gray-900">
					{district}, {cardinalPoints}
				</h1>
				<h1 className="text-center text-6xl font-extrabold text-white dark:text-gray-900">
					{Math.floor(temperature)}º
				</h1>
				<img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="icon" />
				<h1 className="text-center text-3xl font-semibold text-white dark:text-gray-900">
					{skyType}
				</h1>
				<h1 className="text-center text-3xl font-normal text-white dark:text-gray-900">
					{date}
				</h1>
				<div className="flex flex-col lg:flex-row flex-wrap gap-x-6 gap-y-2">
					<p className="text-center text-lg font-normal text-white dark:text-gray-900">
						Wind {wind} m/s
					</p>
					<p className="text-center text-lg font-normal text-white dark:text-gray-900">
						Pressure {pressure} hPa
					</p>
					<p className="text-center text-lg font-normal text-white dark:text-gray-900">
						Humidity {humidity}%
					</p>
					<p className="text-center text-lg font-normal text-white dark:text-gray-900">
						Cloudiness {cloudiness}%
					</p>
					<p className="text-center text-lg font-normal text-white dark:text-gray-900">
						Precipitation {precipitation}%
					</p>
				</div>
			</div>
		</>
	);
}

export default React.memo(BigCard);
