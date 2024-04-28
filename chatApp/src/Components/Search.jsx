import React from 'react'

const Search = () => {
  return (
    <div>
      <div className="search">
        <div className="searchForm">
          <input type="text" placeholder='Find a user'/>
        </div>
        <div className="userChat">
          <img src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=600" alt="" />
          <div className="userChatInfo">
            <span>Jane</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Search
