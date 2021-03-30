import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./pages/Welcome";
import SignIn from "./components/Forms/SignIn/SignIn";

import Error from "./components/Error";
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<Switch>
			<Route path="/" component={Welcome} exact />
			<Route path="/register" component={SignIn} />
			<Route component={Error} />
		</Switch>
	);
}

export default App;
