import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";


import "../App.css"

const SignUp = () => {

    // Hold the useNavigate hook
    const navigate = useNavigate();

    // Hold the email for the user
    const [email, setEmail] = useState('')

    // Hold the password for the user
    const [password, setPassword] = useState('');

    // Hold the error message for the user
    const [errorMsg, setErrorMsg] = useState('');

    // Hold the singleton for the Firebase Authentication Software 
    // Developer Kit 
    const auth = getAuth();
    
    /*
    * @brief Authenicate  a new user via email & password and navgiates
    * the user to the login page after sucessfully signing up
    * @param e the react event
    * @return Promise<void>
    * */
    const onSubmit = async (e) => 
    {

        // Prevent page refresh
        e.preventDefault()

        // Check if there an email & password
        if( email && password )
        { 

            // Use the Firebase Software Developer Kit API method
            // to  implement the Firebase Authentication service that
            // creates a user with email & password     
            createUserWithEmailAndPassword(auth, email, password)
            
            // Catch the promise returned by the API method
            .then((userCredential) => 
            {
                 
                // Hold the user returned by the user credentials
                const user = userCredential.user;
            })

            // Catch the promise rejection by the API method
            .catch((error) => 
            {

                // Hold the error code
                const errorCode = error.code;

                // Hold the error message
                const errorMessage = error.message;
            });

            // Use the useNavigate hook to navigate back to the login route
            navigate("/login") 
        }

        // Else set the error message
        else
        {

            // Set the error message
            setErrorMsg("Please enter both email and password.")
        }
      }

    return(
        
        // Hold a container for the form element
        <div className="FormContainer">
            
            {/* Hold a form for the sign up data */}
            <form>

                {/* Hold a header for the form */}
                <h3 
                className="TextCenter"
                >
                    Sign Up
                </h3>
                
                {/* Add a line break */}
                <br/>
                
                {/* Hold a label for the email input */}
                <label 
                htmlFor="email"
                >
                    Email: 
                    </label>
                <br/>
                
                {/* Hold an input for the user's email */}
                <input 
                id="email" 
                name="email" 
                onChange={(e) => setEmail(e.target.value)}
                required 
                type="email" 
                />

                {/* Add a line break */}
                <br /> 
                
                {/* Add a line break */}
                <br /> 

                {/* Hold a label for the password input */}
                <label 
                htmlFor="pwd"
                >
                    Password: 
                    </label>
                
                {/* Add a line break */}
                <br/>

                {/*  Hold an input for the password */}
                <input 
                id="pwd" 
                name="pwd" 
                onChange={(e) => setPassword(e.target.value)} 
                required 
                type="password" 
                />
                
                {/* Add a line break */}
                <br />
                
                {/* Add a line break */}
                <br /> 

                {/* Hold a paragraph for the error message */}
                <p 
                className="ErrorMsg"
                >
                    {errorMsg}
                </p>

                {/* Hold the submission button */}
                <button 
                className="SubmitBtn"
                onClick={onSubmit} 
                >
                    Submit
                </button>

                {/* Add a line break */}
                <br/>

                {/* Hold a paragraph */}
                <p
                >
                    Already have an account?{' '}
                    
                    {/* Hold a NavLink for the login route */}
                    <NavLink 
                    to="/login"
                     >
                        Login
                    </NavLink>
                </p>
            </form>
        </div>
    )
}

export default SignUp;