import React from 'react';

const useFetch = ({ url, method, body = undefined, headers = undefined }) => {
	const [data, setData] = React.useState(undefined);
	const [error, setError] = React.useState(false);
	const [loading, setLoading] = React.useState(true);

	React.useEffect(() => {
		fetch(url, {
			method: method,
			body: JSON.stringify(body),
			headers: headers,
		})
			.then((response) => response.json())
			.then(setData)
			.catch(setError)
			.finally(() => setLoading(false));
	}, [url, method, body, headers]);

	return { data, error, loading };
};

export default useFetch;
