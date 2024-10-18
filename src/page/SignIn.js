import React, {useState} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import "../App.css"

const SignIn = () => {

    // Hold the useNavigate React Hook
    const navigate = useNavigate();

    // Hold the email of the user
    const [email, setEmail] = useState('')

    // Hold the password of the user
    const [password, setPassword] = useState(''); 

    // Hold the error message of the user
    const [errorMsg, setErrorMsg] = useState('');
    
    /*
    * @brief Authenticates the user with email and password, updates the user's
    * display name,  and navigates to the homepage upon sucessful sign-in
    * @param e the react event
    * @return promise<void>
    * */
    const onSubmit = async (e) => 
    {
        
        // Prevent page refresh
        e.preventDefault();

        // Hold the singleton for the Firebase Authentication Software 
        // Developer Kit 
        const auth = getAuth();

        // Check if there is an email & password
        if( email && password )
        {
            
            // Use the Firebase Authentication Software Developer Kit API 
            // method to implement the Firebase Authentication service that
            // signs in a user with email & password 
            signInWithEmailAndPassword(auth, email, password) 
            
            // Catch the promise return by the API method
            .then((userCredential) => 
            {

                // Hold the Firebase Authentication user
                const user = userCredential.user;

                // Hold the user's display name
                const userDisplayName = email.split('@')[0];
                
                // Use the Firebase Authentication Software Developer Kit API
                // method to implement the Firebase Authentication service that
                // updates the profile
                updateProfile(user, 
                {
                    displayName: userDisplayName
                })
                
                // Catch the promise returned by the API method
                .then(() => 
                {
                    console.log("Display name updated successfully!");
                })

                // Catch the rejection of the promise 
                .catch((error) => 
                {
                    console.error("Error updating display name:", error);
                });
            })

            // Catch the rejection of the promise
            .catch((error) => 
            {

                // Hold the error code of API method
                const errorCode = error.code;

                // Hold the error message of the API method
                const errorMessage = error.message;
            });

            // Navigate to the home page
            navigate("/") 
        }

        // Else set the error message 
        else
        {

            // Set the error message
            setErrorMsg("Please enter both email and password.")
        }
      }

    return(

        // Hold a container for the form 
        <div 
        className="FormContainer"
        >

            {/* Hold the form element */}
            <form
            >
                
                {/* Hold the header for the page */}
                <h3 
                className="TextCenter"
                >
                    Login
                </h3>

                {/* Add a line break */}
                <br
                />

                {/*  Hold the label for the login email input */}
                <label 
                htmlFor="email"
                >
                    Email: 
                </label>

                {/* Add a line break */}
                <br/>

                {/* Hold the email input for the login email */}
                <input 
                id="email" 
                name="email" 
                onChange={(e) => setEmail(e.target.value)} 
                required
                type="email" 
                />

                {/* Add a line break */}
                <br 
                /> 

                {/* Add a line break */}
                <br 
                /> 

                {/* Hold the label for the login password input*/}
                <label 
                htmlFor="pwd"
                >
                    Password: 
                </label>
                
                {/* Add a line break */}
                <br/>

                {/* Hold the password input the login password */}
                <input 
                id="pwd" 
                name="pwd" 
                onChange={(e) => setPassword(e.target.value)} 
                required
                type="password" 
                />

                {/* Add a line break */}
                <br 
                />

                {/* Add a line break */}
                <br 
                /> 

                {/* Hold the paragraph for the error message */}
                <p 
                className="ErrorMsg"
                >
                    {errorMsg}
                </p>

                {/* Hold the button for the login form */}
                <button 
                className="SubmitBtn"
                onClick={onSubmit} 
                >
                    Submit
                </button>

                {/* Add a line break */}
                <br
                />

                {/* Hold the paragraph for the signup link */}
                <p
                >
                    Don't have an account?{' '}
                    
                    {/* Hold the NavLink for the sign up route */}
                    <NavLink 
                    to="/signup" 
                    >
                        Register
                    </NavLink>
                </p>
            </form>
        </div>
    )
}

// Export the SignIn page
export default SignIn;