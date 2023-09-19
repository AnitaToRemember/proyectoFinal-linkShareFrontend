import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const Auth = () => {
  const { user, logout } = useContext(AuthContext)

  return user ? (
    <section className="logged-user">
      Logged in as <Link to={`/user/${user.id}`}>{user.username}</Link>{" "}
      <button onClick={() => logout()}>Logout</button>
    </section>
  ) : (
    <nav className="auth-buttons">
      <ul className="access-buttons" >
        <li>
          <button>
          <Link to={"/register"} className="register-button" >Register</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to={"/"} className="login-button">Login</Link>
          </button>
        </li>
      </ul>
    </nav>
    
  )
}
