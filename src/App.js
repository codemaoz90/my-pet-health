import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import Error from "./components/Error";
import Welcome from "./pages/Welcome";
import SignIn from "./components/Forms/SignIn/SignIn";
import NavBar from "./components/SideBar/NavBar";

function App() {
	return (
		<Switch>
			<Route path="/" component={Welcome} exact />
			<Route path="/register" component={SignIn} />
			<Route path="/home" component={NavBar} />
			<Route component={Error} />
		</Switch>
	);
}

export default App;
