<<<<<<< HEAD
import "bootstrap/dist/css/bootstrap.min.css";
import Welcome from "./pages/Welcome/Welcome";

function App() {
	return (
		<div>
			<Welcome />
		</div>
	);
=======
import React from "react"
import Landing from "./pages/Landing"
import Splash from "./pages/Splash"
import Dog from "./pages/Dog"
import Cat from "./pages/Cat"
import { BrowserRouter as Router, Switch,Route} from "react-router-dom";

function App(){
	return (
		<Router>
            <Switch>
                <Route path="/" exact>
					<Splash/>
                </Route>

                <Route path="/landing">                
					<Landing />
                </Route>

                <Route path="/dog">                
					<Dog />
                </Route>

                <Route path="/cat">                
					<Cat />
                </Route>

            </Switch>  
        </Router>
	
			
			

	)	
>>>>>>> landing
}

export default App
