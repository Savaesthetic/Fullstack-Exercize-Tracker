import { Link } from "react-router-dom"

const Header = () => {
  return (
    <header>
        <h1>Quiz App</h1>
        <nav>
            <ul>
                <li><Link to="/public">Public</Link></li>
                <li><Link to="/private">Private</Link></li>
                <li><Link to="/favorites">Favorited</Link></li>
                <li><Link to="/login">Login</Link></li>
                <li><Link to="/register">Register</Link></li>
                <li><Link to="/account">Account</Link></li>
            </ul>
        </nav>
    </header>
  )
}

export default Header