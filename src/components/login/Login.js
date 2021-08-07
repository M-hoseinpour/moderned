import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './login.css'

function Login() {
    const [signup, setSignup] = useState(true)


    return (
        <div className='back'>
            
            <div className='login'>
            <div className='navbar'>
                <div className='right-nav'>
                    <Link to='/'>
                    <h3>
                        Modernity
                    </h3>
                    </Link>
                </div>
            </div>
            </div>
            { signup ? 
            <div class="signup">
                <div class="signup-connect">
                        <h1>Create your account</h1>
                        <a href="#" class="btn btn-social btn-facebook"><i class="fab fa-facebook"></i> Sign up with Facebook</a>
                        <a href="#" class="btn btn-social btn-twitter"><i class="fab fa-twitter"></i> Sign up with Twitter</a>
                        <a href="#" class="btn btn-social btn-google"><i class="fab fa-google"></i> Sign up with Google</a>
                        <a href="#" class="btn btn-social btn-linkedin"><i class="fab fa-linkedin"></i> Sign up with Linkedin</a>
                    </div>
                    <div class="signup-classic">
                        <h2>Or use the classical way</h2>
                        <form class="form">
                        <fieldset class="username">
                            <input type="text" placeholder="username" />
                        </fieldset>
                        <fieldset class="email">
                            <input type="email" placeholder="email" />
                        </fieldset>
                        <fieldset class="password">
                            <input type="password" placeholder="password" />
                        </fieldset>
                        <button type="submit" class="btn">sign up</button>
                        </form>
                        <p>Already have an account? <span onClick= {() => setSignup(!signup)}>Sign in</span></p>
                    </div>
                    
                </div>  : 

                <div class="signup">
                <div class="signup-connect">
                        <h1>SIGN IN to account</h1>
                        <a href="#" class="btn btn-social btn-facebook"><i class="fab fa-facebook"></i> Sign in with Facebook</a>
                        <a href="#" class="btn btn-social btn-twitter"><i class="fab fa-twitter"></i> Sign in with Twitter</a>
                        <a href="#" class="btn btn-social btn-google"><i class="fab fa-google"></i> Sign in with Google</a>
                        <a href="#" class="btn btn-social btn-linkedin"><i class="fab fa-linkedin"></i> Sign in with Linkedin</a>
                    </div>
                    <div class="signup-classic">
                        <h2>Or use the classical way</h2>
                        <form class="form">
                        <fieldset class="email">
                            <input type="email" placeholder="email" />
                        </fieldset>
                        <fieldset class="password">
                            <input type="password" placeholder="password" />
                        </fieldset>
                        <button type="submit" class="btn">sign in</button>
                        </form>
                        <p>Don't have an account? <span onClick= {() => setSignup(!signup)}>Sign up</span></p>
                    </div>
                    </div> }
            
        </div>
    )
}

export default Login
