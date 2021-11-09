import React from 'react'

const BodyPhoto = (props) => {
    return (
      <div className="container">
          <div className="photoInit">
              <img src={props.bodyPhoto} style={{widht:400,height:400}} alt=""/>
          </div>
      </div>
    )
}

export default BodyPhoto
