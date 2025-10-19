import React from 'react'
import car6 from '../../assets/car6.jpeg'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type='text' placeholder='find a user'/>
      </div>
      <div className='userChat'>
        <img src={car6} />
        <div className="userChatInfo">
          <span>Jane</span>
        </div>

      </div>

    </div>
  )
}

export default Search