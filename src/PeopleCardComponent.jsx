import React from 'react'

const PeopleCardComponent = ({people}) => {
    
  return (
    <div className='people-card'>
        <img className='people-image' src={people.avatar} alt="" />

        <div className='people-description'>
            <span>{people.first_name} {people.last_name} </span>
            <span>{people.email}</span>
        </div>
    </div>
  )
}
export default PeopleCardComponent
