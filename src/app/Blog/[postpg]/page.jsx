import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const getData = async(postpg)=> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postpg}`)

  if(!res.ok){
    throw new error("Something went Wrong")
  }

  return res.json()
}

const Post = async({params}) => {

  const {postpg} = params;
  const post = await getData(postpg)

  return (
      <div className='flex gap-0'>
        <div className=' w-[50%] flex justify-center items-center'>
            <Image src={"/hello.png"} height={500}  width={500} className='rounded-lg'/>
            
        </div>
        <div className=' w-[50%] flex flex-col gap-4'>
          <div className=' text-5xl font-bold mb-3'>{post.title}</div>
          <div className='flex gap-7 justify-centre items-center'>
            <div>
              <Image src={"/noavatar.png"} height={50} width={50} className='rounded-full'/>
            </div>
            <div className='font-semibold'>Author<br/><span className='font-bold text-lg'>Sarthak Daga</span></div>
            <div className='font-semibold'>Published<br/><span className='font-bold text-lg'>21.11.2024</span></div>
          </div>
          <div className='mr-[50px] mt-[40px]'>
          {post.body}  
          </div>
          <Link href={"/Blog"}>
        <div>
          <button className='bg-blue-500 h-10 w-28 rounded-md mt-48'>Back</button>
        </div>
        </Link>
        </div>
      </div>
  )
}

export default Post