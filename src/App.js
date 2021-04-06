import React from "react";
import Routes from "./routes/Routes";
import { AuthProvider } from "./context/Auth";
import "./index.css";
function App() {
	return (
		<AuthProvider>
			<Routes />
		</AuthProvider>
	);
}
export default App;
