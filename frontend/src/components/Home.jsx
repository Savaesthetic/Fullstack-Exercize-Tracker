import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
        <Link to="/users">Users</Link>
        <Link to="/register">Register</Link>
    </div>
  )
}

export default Home