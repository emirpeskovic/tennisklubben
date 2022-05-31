import React, {Suspense} from "react"

const NotFound = () => {
	return <Suspense fallback={<div/>}>
		<p>404 not found</p>
	</Suspense>
}

export default NotFound