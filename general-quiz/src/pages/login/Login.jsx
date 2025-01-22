import React from 'react'
import './Login.css'
import loginimg from '../../assets/example-29.png';
function Login() {
  return (
    <div className='login-page'>
        <div className="container">
            <div className="item-box">
               <div className="box d-flex">
                    <div className="left-box">
                    <div className="login">
                    <div className="login_form">
                            <form  >
                                <h1 className="text-center text-primary">LogIn as user</h1>
                                <div className="error-box">
                                {/* {error && <span>{error}</span>} */}
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email address</label>
                                    <input 
                                        type="email"
                                        className="form-control"
                                        // value={email} 
                                        // ref={emailInputRef}
                                        placeholder="Enter your email"
                                        // onChange={(e) => setEmail(e.target.value)}
                                        
                                    />
                                
                                </div>
                                <div className="mb-3">
                                    <label>Password</label>
                                        <input 
                                            type="password" 
                                            className="form-control"
                                            id="Password"
                                            placeholder="Enter your password"
                                            // value={password} 
                                            // ref={passwordInputRef}
                                            // onChange={(e) => setPassword(e.target.value)} 
                                            
                                        />
                                </div>
                                <button className="btn btn-primary form_login_button" type="submit">Login</button>
                                <div className="bottom_login_register d-flex ">
                                    <p>Don't have an account?</p>
                                    <button className="login_to_register" >
                                       Register
                                    </button>
                                </div>
                                
                            </form>
                            
                    </div>
                </div>
                    </div>
                   
                    <div className="right-box">
                        <div className="box-img">
                            <img src={loginimg} alt="" />
                        </div>
                    </div>
               </div>
            </div>
        </div>
    </div>
  )
}

export default Login