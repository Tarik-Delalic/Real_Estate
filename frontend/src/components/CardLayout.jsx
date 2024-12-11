import React from 'react'

const CardLayout = (props) => {
  return (
   <div className="mt-5">
    <div className="row">
        {props.children}
    </div>
   </div>
  )
}

export default CardLayout