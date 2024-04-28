import { Fragment } from "react"
import { Link } from "react-router-dom"
import MainNavigation from "../components/MainNavigation"

const HomePage = () => {
    return (
        <Fragment>
            <MainNavigation />
            <h1>My Home Page</h1>
            {/* <a href='/Products'>Go To Products Page</a> */}
            <Link to='/products'>Go To Products Page</Link>
        </Fragment>
    )
}

export default HomePage