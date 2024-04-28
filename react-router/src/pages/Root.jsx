import { Fragment } from "react"
import { Outlet } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

const RootLayout = () => {
    return (
        <Fragment>
            <MainNavigation />
            <h1>Layout</h1>
            <Outlet />
        </Fragment>
    )
}

export default RootLayout