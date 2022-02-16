import React from 'react';

const useGeoLocation = () => {
	const [location, setLocation] = React.useState({
		located: false,
		coordinates: {
			lat: '',
			lng: '',
		},
	});

	React.useEffect(() => {
		if (!navigator.geolocation) {
			setLocation({
				located: false,
				error: {
					code: 0,
					message: 'Geolocation is not supported!',
				},
			});
		} else {
			navigator.geolocation.getCurrentPosition(
				(position) => {
					setLocation({
						located: true,
						coordinates: {
							lat: position.coords.latitude,
							lng: position.coords.longitude,
						},
					});
				},
				(error) => {
					setLocation({
						located: false,
						error,
					});
				},
				{
					enableHighAccuracy: true,
					timeout: 5000,
					maximumAge: 0,
				}
			);
		}
	}, []);

	return location;
};

export default useGeoLocation;
