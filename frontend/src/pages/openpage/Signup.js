import { useState } from "react"
import { useSignup } from "../../hooks/useSignup"
import "./login.css";
const Signup = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const {signup, error, isLoading} = useSignup()

  const handleSubmit = async (e) => {
    e.preventDefault()

    await signup(email, password)
  }

  return (
    <div className="firstpage">
    <div className="column-card">
      <h2 className="head-first">You Can Buy & sell Here..</h2>
      <p className="para-first">Decentralised martketplace</p>
    </div>
    <div>
    <form className="signup" onSubmit={handleSubmit}>
      <h3 style={{fontSize:"25px",fontWeight:"bolder"}}>Sign Up</h3>
      
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

      <button disabled={isLoading}>Sign up</button>
      {error && <div className="error">{error}</div>}
    </form>
    </div>
</div>
   
  )
}

export default Signup