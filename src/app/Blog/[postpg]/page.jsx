import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Post = () => {
  return (
      <div className='flex gap-0'>
        <div className=' w-[50%] flex justify-center items-center'>
            <Image src={"/hello.png"} height={500}  width={500} className='rounded-lg'/>
            
        </div>
        <div className=' w-[50%] flex flex-col gap-4'>
          <div className=' text-5xl font-bold mb-3'>Title</div>
          <div className='flex gap-7 justify-centre items-center'>
            <div>
              <Image src={"/noavatar.png"} height={50} width={50} className='rounded-full'/>
            </div>
            <div className='font-semibold'>Author<br/><span className='font-bold text-lg'>Sarthak Daga</span></div>
            <div className='font-semibold'>Published<br/><span className='font-bold text-lg'>21.11.2024</span></div>
          </div>
          <div className='mr-[50px] mt-[40px]'>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Doloribus, dolor! Saepe corporis, debitis vitae eaque nobis obcaecati dolore incidunt consectetur inventore. Quod, autem odio quas fuga perspiciatis ut incidunt ratione?
            Illo est saepe nam. Explicabo, voluptatem. Deleniti laboriosam, cumque obcaecati, dolores cupiditate fuga sapiente animi porro incidunt cum, doloribus dolore corrupti. Rem quod inventore quo tenetur maxime natus, adipisci itaque.
            Atque debitis eaque doloremque corporis quia velit deleniti repellendus. Nam, autem. Velit doloribus soluta delectus corrupti odio nostrum, suscipit minima atque adipisci! Sequi, tenetur provident. Vel provident doloremque deserunt doloribus.
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