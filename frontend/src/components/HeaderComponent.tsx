import React from "react"
import {Link} from "react-router-dom"
import {Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink} from "reactstrap"
import {allRoutes} from "../routes/routeGenerator"

const HeaderComponent = () => {
	return <Navbar
		color="light"
		expand="md"
		light
	>
		<NavbarBrand href="/">
			Tennisklubben Ryvang
		</NavbarBrand>
		<NavbarToggler onClick={function noRefCheck() {
		}}/>
		<Collapse navbar>
			<Nav
				className="me-auto"
				navbar
			>
				{allRoutes.map(route => {
					if (typeof route.component === "undefined") return null
					return <NavItem key={route.name}>
						<NavLink tag={Link} to={route.path}>
							{route.name}
						</NavLink>
					</NavItem>
				})}
			</Nav>
		</Collapse>
	</Navbar>
}

export default HeaderComponent