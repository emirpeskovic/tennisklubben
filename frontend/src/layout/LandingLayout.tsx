import React, {ReactNode, Suspense} from "react"
import {Container, Row} from "reactstrap"
import HeaderComponent from "../components/HeaderComponent"

const LandingLayout = ({children}: { children: ReactNode }) => {
	return <Suspense fallback={<div/>}>
		<HeaderComponent/>
		<Container>
			<Row>
				{children}
			</Row>
		</Container>
	</Suspense>
}

export default LandingLayout