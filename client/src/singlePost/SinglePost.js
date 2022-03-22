import React from 'react'
import "./SinglePost.css"
function SinglePost() {
    return (
        <div className='singlePost'>
          <div className='singlePostWraper'>
              <img src='https://assets.pokemon.com/static2/_ui/img/og-default-image.jpeg' alt='' className='singlePostImg'/>
              <h1 className='singlePostTitle'>Lorem ipsum dolor sit amet.
              <div className='singlePostEdit'>
                  <i className="singlePostIcon fas fa-edit"></i>
                  <i className="singlePostIcon far fa-trash-alt"></i>
                  </div>
              
              </h1>
              <div className='singlePostInfo'>
                  <span className='singlePostAuthor'>Author: <b>Sri</b></span>
                  <span className='singlePostDate'>1 hour ago</span>
              </div>
              <p className='singlePostDesc'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla dictum felis in iaculis sollicitudin. Fusce vitae molestie est. Duis elementum accumsan semper. Fusce at libero at felis interdum elementum congue non dui. Quisque vestibulum auctor orci id gravida. Fusce neque mauris, lobortis non venenatis sed, ultricies consectetur est. Curabitur mi leo, aliquam eu fermentum a, efficitur sed ex. Vestibulum mi nisi, semper cursus feugiat vitae, condimentum quis eros. Vivamus ut purus ut sapien sodales dapibus. Cras purus elit, luctus quis nulla quis, convallis vehicula nulla. Ut non quam elementum, efficitur elit eu, interdum dolor.

Integer in facilisis neque, ut mollis ex. Donec ac diam accumsan, euismod libero vitae, condimentum urna. Nulla facilisis nunc non ante suscipit tincidunt. Sed lacinia ultrices enim, id rhoncus dui accumsan eu. Etiam id condimentum libero, eu luctus sem. Etiam tellus mi, porttitor et feugiat et, pretium non ante. In non metus et sapien scelerisque tristique. Duis malesuada sed mauris et tristique. Aenean bibendum lectus vulputate fringilla egestas. In at lectus ac erat iaculis tristique. Nulla non ipsum consequat neque blandit finibus. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque quis magna nec felis rhoncus blandit.
              </p>
          </div>
        </div>
    )
}

export default SinglePost
