import { useContext } from "react"
import { Link } from "react-router-dom"
import { AuthContext } from "../context/AuthContext"
import "../styles/components/Auth.css"

export const Auth = () => {
  const { user, logout } = useContext(AuthContext)

  return user ? (
    <section className="logged-user">
      Logged in as <Link to={`/user/${user.id}`}>{user.username}</Link>{" "}
      <button onClick={() => logout()}>Logout</button>
    </section>
  ) : (
    <nav>
      <ul className="access-buttons" >
        <li>
          <button>
          <Link to={"/register"} className="auth-buttons" >Register</Link>
          </button>
        </li>
        <li>
          <button>
            <Link to={"/"} className="auth-buttons">Login</Link>
          </button>
        </li>
      </ul>
    </nav>
    
  )
}
