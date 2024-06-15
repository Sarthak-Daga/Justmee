import React from 'react'
import Link from 'next/link'
const Links = () => {
  
  const links = [

    {
      title:"Homepage",
      path: "/",
    },
    {
      title:"About",
      path: "/about",
    },
    {
      title:"Contact",
      path: "/contact",
    },
    {
      title:"Blog",
      path: "/blog",
    },
    {
      title:"Admin",
      path: "/admin",
    },
  ]
  return (
    <div>
      {Links.map((link=>(
        <Link href={link.path} key={link.path}>{link.title}</Link>
      )))}
    </div>
  )
}

export default Links