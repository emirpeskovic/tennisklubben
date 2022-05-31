import React from "react"
import {Route} from "react-router-dom"

import CreateProfileComponent from "../components/CreateProfileComponent"
import HomeComponent from "../components/HomeComponent"
import ProfileComponent from "../components/ProfileComponent"

interface PageRouteInterface {
	name: string
	path: string
	index?: boolean
	alias?: string
	component?: any
	slice?: any
}

export type PageRoute = PageRouteInterface & {
	children?: PageRouteInterface[]
}

const landingRoutes: PageRoute = {
	component: HomeComponent,
	index: true,
	name: "Hjem",
	path: "/",
}

const profileRoutes = {
	children: [
		{
			component: CreateProfileComponent,
			name: "Lav profil",
			path: "/profile/create",
		},
	],
	component: ProfileComponent,
	name: "Profil",
	path: "/profile",
}

export const publicRoutes = [
	landingRoutes, profileRoutes,
] as PageRoute[]

export const allRoutes = [
	landingRoutes, profileRoutes,
] as PageRoute[]

function renderRoute(Component: any, WrapperComponent: any) {
	if (typeof WrapperComponent === "function") {
		return <WrapperComponent>
			<Component/>
		</WrapperComponent>
	}
	return <Component/>
}

const routeGenerator = (WrapperComponent: any, routes: PageRoute[]) => {
	const pageRoutes = [] as any

	routes.forEach((route, index) => {
		pageRoutes.push(<Route
			key={route.name + index}
			path={route.path}
			index={route.index ?? false}
			element={renderRoute(route.component, WrapperComponent)}
		/>)

		if (typeof route.children !== "undefined") {
			route.children.forEach((childRoute, childIndex) => {
				pageRoutes.push(<Route
					key={childRoute.name + childIndex}
					path={childRoute.path}
					index={childRoute.index ?? false}
					element={renderRoute(childRoute.component, WrapperComponent)}
				/>)
			})
		}
	})

	return pageRoutes
}

export default routeGenerator