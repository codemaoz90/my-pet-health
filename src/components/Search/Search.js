import { Form, Col } from "react-bootstrap";
import { BiSearch } from "react-icons/bi";
import "./Search.css";
export default function Search() {
	const searchDiv = {
		//marginLeft: "16px",
		width: "630px",
		borderRadius: "15px",
		backgroundColor: "#E3E3E3",
	};

	const searchInput = {
		background: "#E3E3E3",
		border: "none",
	};

	return (
		<Col className="m-3 d-flex justify-content-around" style={searchDiv}>
			<input
				className="search-input w-100"
				type="text"
				style={searchInput}
				placeholder="Search medication"
			/>

			<BiSearch style={{ height: "38px" }}></BiSearch>
		</Col>
	);
}
