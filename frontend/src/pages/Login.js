import { useState } from "react"
import { useLogin } from "../hooks/useLogin"
//import { Container, Row, Col } from 'react-bootstrap';
import "./login.css"
const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const { login, error, isLoading } = useLogin()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await login(email, password)
  }

  return (
    <div className="firstpage">
        <div className="column-card">
          <h2 className="head-first">You Can Buy & sell Here..</h2>
          <p className="para-first">Decentralised martketplace</p>
        </div>
        <div>
          <form className="login" onSubmit={handleSubmit}>
            <h3 style={{fontSize:"25px",fontWeight:"bolder"}}>Log In</h3>
            <label>Email address:</label>
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
            <label>Password:</label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />

            <button disabled={isLoading}>Log in</button>
            {error && <div className="error">{error}</div>}
          </form>
        </div>
    </div>
  )
}

export default Login