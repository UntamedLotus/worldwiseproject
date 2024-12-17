import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./Routes";

export const App = () => {
	return (
		<React.StrictMode>
			<BrowserRouter>
				<AppRoutes />
			</BrowserRouter>
		</React.StrictMode>
	);
};

export default App;
