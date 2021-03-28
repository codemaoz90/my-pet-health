import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./pages/Welcome/Welcome";
import SignIn from "./components/Forms/SignIn/SignIn";
import { Container } from "react-bootstrap";
import Error from "./components/Error";
import { Switch, Route } from "react-router-dom";

function App() {
	return (
		<Container className=" vh-100 d-flex flex-column justify-content-center align-items-center">
			<Switch>
				<Route path="/" component={Welcome} exact />
				<Route path="/register" component={SignIn} />
				<Route component={Error} />
			</Switch>
		</Container>
	);
}

export default App;
