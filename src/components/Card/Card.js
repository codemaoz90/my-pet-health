import { Card, Button, Col } from "react-bootstrap";
import { BsThreeDotsVertical } from "react-icons/bs";
import "./Card.css";
function CardPet() {
	return (
		<Card className="m-3 rounded-5 card-shadow">
			<Card.Body className="d-flex  py-0 ">
				<Col className="py-3">
					<Card.Text className="my-0">Apoquel 16 mg</Card.Text>
					<Card.Text className="font-weight-bolder">
						1 tablet
						<span className="font-weight-light"> every day</span>
					</Card.Text>
				</Col>
				<Col className="align-self-center text-right">
					<BsThreeDotsVertical
						fill="#f4c897"
						className="card-dot"
					></BsThreeDotsVertical>
				</Col>
			</Card.Body>
		</Card>
	);
}

export default CardPet;
