import React from 'react'

const Message = () => {
  return (
    <div className='message owner'>
      <div className="messageInfo">
         <img src="https://images.unsplash.com/photo-1565034946487-077786996e27?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
         <span>just now</span>
      </div>
      <div className="messageContent">
        <p>hello </p>
        <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
      </div>
    </div>
  )
}

export default Message
