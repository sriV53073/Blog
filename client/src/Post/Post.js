import React from 'react'
import "./Post.css"
export default function Post() {
    return (
        <div className='post'>
            <img
            className='postImg'
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3zLjGoSMDW6ewT281K9jZsUkhNcqhveGE6g&usqp=CAU'
            alt=''
            />
            <div className='postInfo'>
                <div className='postCats'>
                    <span className='postCat'>Attack</span>
                    <span className='postCat'>Type</span>
                </div>
                <span className='postTitle'>Charizard is a fire type Pokemon that attacks with special attack</span>
                <hr/>
                <span className='postDate'>1 hour ago</span>
            </div>
            <p className='postDesc'> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet augue ipsum. Fusce eu nisi blandit, maximus leo sed, lacinia nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed quis blandit odio. Vestibulum quis dapibus eros. Quisque porttitor elit sit amet ante rhoncus, eget venenatis est lobortis
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet augue ipsum. Fusce eu nisi blandit, maximus leo sed, lacinia nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed quis blandit odio. Vestibulum quis dapibus eros. Quisque porttitor elit sit amet ante rhoncus, eget venenatis est lobortis
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet augue ipsum. Fusce eu nisi blandit, maximus leo sed, lacinia nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed quis blandit odio. Vestibulum quis dapibus eros. Quisque porttitor elit sit amet ante rhoncus, eget venenatis est lobortis
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet augue ipsum. Fusce eu nisi blandit, maximus leo sed, lacinia nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed quis blandit odio. Vestibulum quis dapibus eros. Quisque porttitor elit sit amet ante rhoncus, eget venenatis est lobortis
             </p>
        </div>
    )
}
