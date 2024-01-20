import React, { useState } from 'react';
import { useLogin } from "../../hooks/useSignin"
import { useSignup } from "../../hooks/useSignup"
import './login.css'
import img2 from '../../images/img2.svg'
import img3 from '../../images/img3.svg'


const Login= () => {

        const [isSignUpMode, setIsSignUpMode] = useState(false);
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const { login, error, isLoading } = useLogin()
        const {signup, error1, isLoading1} = useSignup()

        const handleSigninSubmit = async (e) => {
            e.preventDefault()
        
            await login(email, password)
          }

          const handleSignupSubmit = async (e) => {
            e.preventDefault()
        
            await signup(email, password)
          }
      
        const handleSignUpClick = () => {
          setIsSignUpMode(true);
        };
      
        const handleSignInClick = () => {
          setIsSignUpMode(false);
        };
      
       
    return ( 

        
        
        <div className={`container1 ${isSignUpMode ? 'sign-up-mode' : ''}`}>
            
            <div className="forms-container1">
                <div className="signin-signup">
                        <form action="" className="sign-in-form" onSubmit={handleSigninSubmit}>
                        <h2 className="title">
                            Sign In </h2>
                            <div className="input-field">
                                <i className="fas fa-user" style={{marginTop:"13px",marginLeft:'16px'}}></i>
                                <input type="text" placeholder="Username" onChange={(e) => setEmail(e.target.value)}value={email}/>
                                </div>
                                <div className="input-field">
                                <i className="fas fa-lock" style={{marginTop:"13px",marginLeft:'16px'}}></i>
                                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}value={password}/>
                            </div>
                            {/* <input type="submit" className="btn solid" /> */}
                            <button disabled={isLoading} className="btn solid">Signin</button>
                            <p className="social-text">
                                Or Sign In with Social Platforms
                            </p>
                            {error && <div className="error">{error}</div>}
                            </form>

                            <form action="" className="sign-up-form" onSubmit={handleSignupSubmit}>
                        <h2 className="title">
                            Sign Up </h2>
                            <div className="input-field">
                                <i className="fas fa-user" style={{marginTop:"13px",marginLeft:'16px'}}></i>
                                <input type="text" placeholder="Username" onChange={(e) => setEmail(e.target.value)}value={email}/>
                                </div>
                                <div className="input-field">
                                <i className="fas fa-box"style={{marginTop:"13px",marginLeft:'16px'}}></i>
                                <input type="text" placeholder="Email" />
                                </div>
                                <div className="input-field">
                                <i className="fas fa-lock"style={{marginTop:"13px",marginLeft:'16px'}}></i>
                                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)}value={password}/>
                            </div>
                            {/* <input type="submit" className="btn solid" /> */}
                            <button disabled={isLoading1} className="btn solid">Signup</button>
                            <p className="social-text">
                                Or Sign Up with Social Platforms
                            </p>
                            {error && <div className="error">{error1}</div>}
                            </form>
                </div>
                
            </div>
            <div className="panels-container1">
                    <div className="panel left-panel">
                        <div className="content">
                            <h3>New Here?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nihil ab, dolor nostrum ullam quas quibusdam repellendus eligendi maxime dolorem culpa voluptatum perferendis reprehenderit eaque neque? Aut nisi tempora error.</p>

                            <button className='btn transparent' id='sign-up-btn' onClick={handleSignUpClick}>Sign Up</button>
                        </div>
                        <img src={img2}alt="" class ='image'/>
                    </div>

                    <div className="panel right-panel">
                        <div className="content">
                            <h3>One of us ?</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis nihil ab, dolor nostrum ullam quas quibusdam repellendus eligendi maxime dolorem culpa voluptatum perferendis reprehenderit eaque neque? Aut nisi tempora error.</p>

                            <button className='btn transparent' id='sign-in-btn' onClick={handleSignInClick}>Sign In</button>
                        </div>
                        <img src={img3}alt="" class ='image'/>
                    </div>
            </div>
            
        </div>
     );
}
 
export default Login;