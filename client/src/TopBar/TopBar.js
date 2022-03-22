import React from 'react'
import "./TopBar.css"
import { Link } from "react-router-dom";
const user = false;
function TopBar() {
    return (
        <div className='top'>
            <div className="topLeft">
            <i className="topIcon fab fa-facebook"></i>
            <i className="topIcon fab fa-github"></i>
            <i className="topIcon fab fa-twitter"></i>
            
            </div>
          
            <div className="topCenter">
            <ul className='topList'>
                    <li className='topListIt'>
                        <Link className ="link "to = "/">Home</Link>
                    </li>
                    <li className='topListIt'>
                    <Link className ="link "to = "/about">About</Link>
                         </li>
                    <li className='topListIt'>
                    <Link className ="link "to = "/contact">Contact</Link>
                    </li>
                    <li className='topListIt'>
                    <Link className ="link"to = "/write">Write</Link>
                    </li>
                    <li className='topListIt'>
                        {user && "Logout"}
                    </li>
                </ul>
            </div>
            
            <div className="topRight">
                {!user &&  <ul className='topList'>
                <li className='topListIt'>
                        <Link className ="link "to = "/login">Login</Link>
                    </li>
                    <li className='topListIt'>
                        <Link className ="link "to = "/register">Register</Link>
                    </li>
                         </ul>}
            <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}

export default TopBar;