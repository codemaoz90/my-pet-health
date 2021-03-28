import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./pages/Welcome/Welcome";
import SignIn from "./components/Forms/SignIn/SignIn";
import { Container } from "react-bootstrap";

function App() {
	return (
		<Container className=" vh-100 d-flex flex-column justify-content-center align-items-center">
			<SignIn />
		</Container>
	);
}

export default App;
