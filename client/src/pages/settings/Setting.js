 import React from 'react'
 import "./Setting.css"
 import Sidebar from '../../sidebar/Sidebar'
 function Setting() {
     return (
         <div className='settings'>
             <div className='settingsWrapper'>
                 <div className='settingsTitle'>
                     <span className='settingsUpdateTitle'>Update Your Account</span>
                     <span className='settingsDeleteTitle'>Delete Your Account</span>
                 </div>
                 <form className='settingsForm'>
                     <label>Profile Picture</label>
                     <div className='settingsPP'>
                         <img 
                         src = 'https://gamepress.gg/pokemonmasters/sites/pokemonmasters/files/2020-02/Red.png'
                         alt=''
                         />
                         <label htmlFor='fileInput'><i className="settingsPPIcon far fa-user"></i></label>
                         <input type = "file" id ="fileInput" style={{display:"none"}}/>
                     </div>
                     <label>Username</label>
                     <input type = "text" placeholder='Sri'/>
                     <label>Email</label>
                     <input type = "text" placeholder='svemugunta@gmail.com'/>
                     <label>Password</label>
                     <input type = "text" />
                     <button className='settingsSumbit'>Update</button>
                 </form>
             </div>
             <Sidebar/>
         </div>
     )
 }
 
 export default Setting
 