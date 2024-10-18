import { useState, useEffect } from "react"
import { NavLink, useNavigate } from 'react-router-dom';
import "../App.css"
import { auth } from '../firebase';
import { useAuthState } from "react-firebase-hooks/auth";

const Navbar = () => {

    const navigate = useNavigate();
    const [user] = useAuthState(auth);

    const handleLogout = () => {   
        // TODO: call signOut function Firebase 
                 
        navigate("/login"); // navigate to login after logging out
    }


    return(
        <div className="Navbar">
            <div><h2 onClick={()=>navigate('/')} style={{cursor:"pointer"}}>Firebase Chat App</h2></div>
            <div className="NavbarRight"> 
                <p className="NavbarName">Hello, {user?.displayName}</p>
                <button onClick={handleLogout} className="LogoutBtn">Logout</button>
            </div>
        </div>
    )
}

export default Navbar;