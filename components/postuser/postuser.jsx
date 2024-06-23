import React from 'react'
import { getPosts, getUser } from '../../lib/data'

// const getData = async(userID)=> {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userID}`)

//   // if(!res.ok){
//   //   throw new error("Something went Wrong")
//   // }

//   return res.json()
// }


const Postuser = async({userID}) => {

  const user = await getUser(userID);

  return (
    <>
    <div className='font-semibold'>Author<br/><span className='font-bold text-lg'>{user.username}</span></div>
    <div className='font-semibold'>Email<br/><span className='font-bold text-lg'>{user.email}</span></div>
    </>
  )
}

export default Postuser