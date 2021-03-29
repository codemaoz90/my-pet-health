import React from "react"
import Landing from "./pages/Landing"
import Splash from "./pages/Splash"
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
            </Switch>  
        </Router>
	
			
			

	)	
}

export default App
