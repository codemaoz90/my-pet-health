import { useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./SidebarData";
import avatar from "../../assets/img/james.png";
import "./NavBar.css";
function NavBar() {
	const [sidebar, setSidebar] = useState(true);

	const showSidebar = () => setSidebar(!sidebar);
	console.log(sidebar);
	return (
		<nav className={`sideBar ${sidebar ? " menu-active" : "inactive"} `}>
			<div className="sideBarCloseBtn">
				{sidebar ? (
					<AiIcons.AiOutlineClose onClick={showSidebar} />
				) : (
					<FaIcons.FaBars onClick={showSidebar} />
				)}
			</div>
			<div className={`profile ${!sidebar ? "hidden" : ""}`}>
				<div>
					<img
						style={{ borderRadius: "50%", width: "100px" }}
						src={avatar}
					/>
				</div>
				<h3>James</h3>
			</div>
			<div className={`sideBar-links ${!sidebar ? "hidden" : ""}`}>
				{SidebarData.map((item, index) => {
					return (
						<div key={index} className={item.cname}>
							<a href="">
								{item.title}
								{item.icon}
							</a>
						</div>
					);
				})}
			</div>
			<div className="sideBarBtn ">
				<button className={` btn-logout ${!sidebar ? "hidden" : ""} `}>
					<span className="mr-2">Logout</span>
					<FaIcons.FaSignOutAlt />
				</button>
			</div>
		</nav>
	);
}

export default NavBar;
