import Card from "../../components/Card/Card";
import { Button, Container, Col } from "react-bootstrap";
import Search from "../../components/Search/Search";
import SideBar from "../../components/SideBar/NavBar";
function Schedule() {
	const styledButton = {
		border: "none",
		padding: "5px 40px",
		borderRadius: "15px",
		backgroundColor: "#fbe2b9",
	};
	return (
		<>
			<div className="d-flex">
				{/* <SideBar /> */}

				<div className="d-flex justify-content-center align-items-center vh-100">
					<Container style={{ width: "700px" }}>
						<h2 className="text-center">Scheduled Visits</h2>
						<Search />
						<Card />
						<Card />
						<Card />
						<Col className="text-center">
							<button style={styledButton}>Call a doctor</button>
						</Col>
					</Container>
				</div>
			</div>
		</>
	);
}

export default Schedule;
