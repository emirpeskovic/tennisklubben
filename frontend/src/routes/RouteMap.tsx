import {BrowserRouter as Router, Route, Routes as Switch} from "react-router-dom"
import LandingLayout from "../layout/LandingLayout"
import NotFound from "../pages/NotFound"
import routeGenerator, {allRoutes} from "./routeGenerator"

const RouteMap = () => {

	return <Router>
		<Switch>
			<Route path={"/"}>
				{/* Render LandingLayout */}
				{routeGenerator(LandingLayout, allRoutes)}

				{/* 404 Fallback */}
				<Route path={"*"} element={<NotFound/>}/>
			</Route>
		</Switch>
	</Router>
}

export default RouteMap