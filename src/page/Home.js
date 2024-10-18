import React, { useState, useEffect } from 'react';
import { Link, createSearchParams, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar.js'
import axios from 'axios'
import { ClipLoader } from 'react-spinners';
import "../App.css"
import { auth } from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth";
import { onAuthStateChanged } from "firebase/auth";

const AllUsersDisplay = () => {

    // Hold a state for the Firebase Authentication User objects
    const [users,setUsers] = useState([]);

    // Hold if the page is current loading in the useEffect
    const [loading, setLoading] = useState(true);

    // Hold the useNavigate react hook
    const navigate = useNavigate();

    // Hold the state of the current user authenticated
    const [currUser, setCurrUser] = useState(null)

    // On mount attached a the callback function 
    // when the authentication state changes
    useEffect(()=> {
        
        // Attach on observer to the state change of the singleton
        onAuthStateChanged(auth,(user)=>
         {

            // Check if there is a user
            if( user )
            {

                // Set the current user
                setCurrUser(user)

                // Console log the user
                console.log(user)
            }
        })

    },[])

    return(

        // Hold a container for the page
        <div>

            {/* Hold the Navbar component */}
            <Navbar 
            />

                {/* Hold a container for the user box */}
                <div 
                className="UserBox"
                >
                    
                    {/* Hold the header for the home page */}
                    <h1 
                    className="TextCenter"
                    >
                        If you see a secret image below, then you have implemented Firebase signup/login!!
                    </h1>
                    
                    {/* Hold a container for the user's image */}
                    <div 
                    className="CenterContainer"
                    >

                        {/* Check if there is a current user & render */}
                        { currUser ? 
                        
                            // Render the user's image
                            <img 
                            src="https://www.thewildcardshop.com/wp-content/uploads/2021/02/LWP83.jpg" 
                            />
                         : null 
                         }
                    </div>
                </div>
        </div>
    )
}

export default AllUsersDisplay;