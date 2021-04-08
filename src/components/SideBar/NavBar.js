import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import avatar from "../../assets/img/james.png";
import "./NavBar.css";
import firebase from "firebase/app";
// import { AuthContext } from "../../context/Auth";
import { Link } from "react-router-dom";

function NavBar() {
	const logout = () => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				console.log("Logout Succesful");
			})
			.catch((error) => {
				console.log(error);
			});
	};

	// Obtain the user from AuthContext Provider.

	const [sidebar, setSidebar] = useState(false);

	const showSidebar = () => setSidebar(!sidebar);

	return (
		<nav className={`sideBar ${sidebar ? " menu-active" : "inactive"} `}>
			<div className="sideBarCloseBtn">
				{sidebar ? (
					<AiIcons.AiOutlineClose onClick={showSidebar} />
				) : (
					<img
						style={{ borderRadius: "50%", width: "70px" }}
						src={avatar}
						onClick={showSidebar}
					/>
				)}
			</div>
			<div className={`profile ${!sidebar ? "hidden" : ""}`}>
				<div>
					<img
						style={{ borderRadius: "50%", width: "100px" }}
						src={avatar}
					/>
				</div>
				<span style={{ fontFamily: "Gilroy", fontWeight: "800" }}>
					James
				</span>
				<p
					style={{
						fontFamily: "Gilroy",
						fontSize: "1rem",
						fontWeight: "500",
					}}
				>
					Change profile photo
				</p>
			</div>
			<div className={`sideBar-links ${!sidebar ? "hidden" : ""}`}>
				{SidebarData.map((item, index) => {
					return (
						<div key={index} className={item.cname}>
							<a style={{ fontFamily: "Gilroy" }} href="">
								{item.title}
								{item.icon}
							</a>
						</div>
					);
				})}
			</div>
			<div className="sideBarBtn ">
				<button
					onClick={() => logout()}
					className={` btn-logout ${!sidebar ? "hidden" : ""} `}
				>
					<span className="mr-2" style={{ fontFamily: "Gilroy" }}>
						Log out
					</span>
					<FaIcons.FaSignOutAlt />
				</button>
			</div>
		</nav>
	);
}

export default NavBar;
