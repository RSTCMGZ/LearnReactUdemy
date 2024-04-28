import { Fragment } from "react"
import { Link } from "react-router-dom"

const HomePage = () => {
    return (
        <Fragment>
            <h1>My Home Page</h1>
            {/* <a href='/Products'>Go To Products Page</a> */}
            <Link to='/products'>Go To Products Page</Link>
        </Fragment>
    )
}

export default HomePage