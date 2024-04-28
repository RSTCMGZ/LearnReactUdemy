import { Fragment } from "react"
import { Link, useNavigate } from "react-router-dom"

const HomePage = () => {
    const navigate = useNavigate()
    function navigateHandler() {
        navigate('/products')
    }
    return (
        <Fragment>
            <h1>My Home Page</h1>
            {/* <a href='/Products'>Go To Products Page</a> */}
            {/* <Link to='/products'>Go To Products Page</Link> */}
            <button onClick={navigateHandler}>Go To Products Page</button>
        </Fragment>
    )
}

export default HomePage