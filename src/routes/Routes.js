import React from "react";
import Landing from "../pages/Landing";
import Splash from "../pages/Splash";
import Dog from "../pages/Dog";
import Cat from "../pages/Cat";
import NavBar from "../components/SideBar/NavBar";
import Welcome from "../pages/Welcome";
import MedicalRecord from "../pages/MedicalRecord";
import Schedule from "../pages/Schedule/Schedule";
import DetailedInformation from "../pages/DetailedInformation";
import Vaccination from "../pages/Vaccination";
import InfoHealth from "../pages/Information/InfoHealth";
import InfoGrooming from "../pages/Information/InfoGrooming";
import InfoAlerts from "../pages/Information/InfoAlerts";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignIn from "../components/Forms/SignIn/SignIn";

function Routes() {
	return (
		<Router>
			<Switch>
				<Route path="/" exact>
					<Splash />
				</Route>

				<Route path="/info_health">
					<InfoHealth />
				</Route>

				<Route path="/info_grooming">
					<InfoGrooming />
				</Route>

				<Route path="/info_alerts">
					<InfoAlerts />
				</Route>

				<Route path="/landing">
					<Landing />
				</Route>
				<Route path="/sidebar">
					<NavBar />
				</Route>
				<Route path="/login">
					<Welcome />
				</Route>

				<Route path="/signin">
					<SignIn />
				</Route>

				<Route path="/dog">
					<Dog />
				</Route>

				<Route path="/cat">
					<Cat />
				</Route>
				<Route path="/medical">
					<MedicalRecord />
				</Route>
				<Route path="/details">
					<DetailedInformation />
				</Route>
				<Route path="/schedule">
					<Schedule />
				</Route>
				<Route path="/vaccination">
					<Vaccination />
				</Route>
			</Switch>
		</Router>
	);
}

export default Routes;
