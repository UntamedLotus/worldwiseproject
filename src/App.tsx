import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";

export const App = () => {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<div className='p-5 h-[100vh] w-full'>
					<AppRoutes />
				</div>
			</BrowserRouter>
		</React.StrictMode>
	);
};

export default App;
