import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

/* Style */
import './App.css';

/* Components */
import Layout from './components/Layout/';

/* Pages */
import Homepage from './pages/Homepage/';

function App() {
	return (
		<>
			<Router>
				<div className="font-poppins bg-slate-200 dark:bg-slate-800 min-h-screen transition duration-700">
					<Routes>
						<Route path="/" element={<Layout />}>
							<Route path="/" element={<Homepage />} />
							<Route path="*" element={<Homepage />} />
						</Route>
					</Routes>
				</div>
			</Router>
		</>
	);
}

export default App;
