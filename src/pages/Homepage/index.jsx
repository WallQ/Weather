import React from 'react';

/* Hooks */
import useGeoLocation from '../../hooks/useGeoLocation';

/* Components */
const BigCard = React.lazy(() => import('../../components/BigCard'));
const SmallCard = React.lazy(() => import('../../components/SmallCard'));

function Homepage() {
	const [data, setData] = React.useState(undefined);
	const [error, setError] = React.useState(undefined);
	const [loading, setLoading] = React.useState(true);
	const location = useGeoLocation();

	React.useEffect(() => {
		if (!location.located) return;
		fetch(
			`https://api.openweathermap.org/data/2.5/forecast?lat=${location.coordinates.lat}&lon=${location.coordinates.lng}&appid=${process.env.REACT_APP_OPEN_WEATHER}&units=metric&mode=json&cnt=5&lang=en`,
			{
				method: 'GET',
			}
		)
			.then((response) => response.json())
			.then(setData)
			.catch(setError)
			.finally(() => setLoading(false));
	}, [location]);

	console.log('Data -> ', data);
	console.log('Error -> ', error);
	console.log('Loading -> ', loading);
	console.log('Location -> ', location);
	return (
		<>
			<main className="flex items-center justify-center">
				<div className="container mt-6">
					{data ? (
						<React.Suspense fallback={<h1>Loading...</h1>}>
							<BigCard
								district={data.city.name}
								cardinalPoints={data.city.country}
								temperature={data.list[0].main.temp}
								icon={data.list[0].weather[0].icon}
								skyType={data.list[0].weather[0].main}
								date={data.list[0].dt_txt}								
								wind={data.list[0].wind.speed}
								pressure={data.list[0].main.pressure}
								humidity={data.list[0].main.humidity}
								cloudiness={data.list[0].clouds.all}
								precipitation={data.list[0].pop}
							/>
							<div className="flex flex-col lg:flex-row gap-y-6 lg:gap-x-6 mt-4">
								{data.list.slice(1).map((forcast, index) => (
									<SmallCard
										key={index}
										date={forcast.dt_txt}
										temperature={forcast.main.temp}
										icon={forcast.weather[0].icon}
										weatherType={forcast.weather[0].main}
									/>
								))}
							</div>
						</React.Suspense>
					) : (
						<>
							<h1>No data!</h1>
						</>
					)}
				</div>
			</main>
		</>
	);
}

export default Homepage;
