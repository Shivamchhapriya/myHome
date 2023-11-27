import React from 'react'
import "./Gallery.css";
function Gallery() {
  return (
    <div>
      <div class="container">
        <div class="imageBox imageBefore">
            <img src="/asset/Home-3.jpg" width={"200rem"} height={"200rem"} alt=""/>
        </div>
        <div class="imageBox imageAfter">
            {/* <img src="/asset/Home-4.jpg"  width={"200rem"} height={"200rem"}  alt=""/> */}
            <h6>Lorem ipsum<br/> dolor sit amet <br/>consectetur adipisicing<br/> elit. Voluptate,<br/> dicta!</h6>
        </div>
        </div>
    </div>
  )
}

export default Gallery
