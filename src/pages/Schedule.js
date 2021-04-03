import Card from "../components/Card/Card";
import { Button, Container, Col } from "react-bootstrap";
import Search from "../components/Search/Search";
function Schedule() {
	const styledButton = {
		border: "none",
		padding: "5px 40px",
		borderRadius: "15px",
		backgroundColor: "#fbe2b9",
	};
	return (
		<>
			<Container style={{ width: "380px" }}>
				<h2 className="text-center">Medical Records</h2>
				<Search />
				<Card />
				<Card />
				<Card />

				<Col className="text-center">
					<button style={styledButton}>Call a doctor</button>
				</Col>
			</Container>
		</>
	);
}

export default Schedule;
