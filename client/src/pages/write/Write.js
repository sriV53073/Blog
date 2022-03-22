import React from 'react'
import "./Write.css"
function Write() {
    return (
        <div className='write'>
            <img
            className='writeImg'
            src='data:image/jpeg;base64,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'
            alt=''
            />
            <form className='writeForm'>
                <div className='writeFormGroup'>
                    <label  htmlFor='fileInput'><i className="writeIcon fas fa-plus"></i></label>
                    <input type="file" id = "fileInput" style={{display:"none"}}/>
                    <input type ="text" placeholder='Title' className='writeInput' autoFocus={true}/>
                </div>
                <div className='writeFormGroup'>
                    <textarea placeholder='Type Content ...' type = "text" className='writeInput writeText'></textarea>
                </div>
                <button className='writeSubmit'>Publish</button>
            </form>
        </div>
    )
}

export default Write
