import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/Page1";
import MenuPage from "./pages/Page2";

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Navigate to="/main" replace />} />
				<Route path="/main" element={<MenuPage />} />
				<Route path="/sign_in" element={<LoginPage />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
