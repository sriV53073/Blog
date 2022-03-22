import React from 'react'
import "./Header.css"
function Header() {
    return (
        <div className='header'>
           <div className='headerTitles'>
               <span className='headerTitleSm'>React & Node</span>
               <span className='headerTitleLg'>Blog</span>
           </div>
           <img
            className='headerImg'
            src="https://i.pinimg.com/originals/53/88/c6/5388c6d2caf20a6a3396fc9f27465306.jpg"
            alt=""
            />
            
        </div>
    )
}

export default Header
