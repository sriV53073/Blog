import React from 'react'
import "./Sidebar.css"
function Sidebar() {
    return (
        <div className='sidebar'>
            <div className='sidebarItem'>
                <span className='sidebarTitle'>ABOUT ME</span>
                <img
                src='https://gamepress.gg/pokemonmasters/sites/pokemonmasters/files/2020-02/Red.png'
                alt=""
                />
                <p>Hey My name is Red I am the current champion of Kanto
                    I am chilling in the top of Mt. Moon
                </p>
            </div>
            <div className='sidebarItem'>
            <span className='sidebarTitle'>CATEGORIES</span>
            <ul className='sidebarList'>
                <li className='sidebarListItem'>Pokemon</li>
                <li className='sidebarListItem'>Life</li>
                <li className='sidebarListItem'>Theme Song</li>
                <li className='sidebarListItem'>Game</li>
                <li className='sidebarListItem'>Rival</li>
                <li className='sidebarListItem'>Friend</li>
            </ul>
            </div>
            <div className = "sidebarItem">
            <span className='sidebarTitle'>Follow me</span>
            <div className='sidebarSocial'>
            <i className="sidebarIcon fab fa-facebook"></i>
            <i className="sidebarIcon fab fa-github"></i>
            <i className="sidebarIcon fab fa-twitter"></i>
            </div>
            </div>
        </div>
    )
}

export default Sidebar
