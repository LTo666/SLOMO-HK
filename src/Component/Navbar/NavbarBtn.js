import React from 'react'

export default function NavbarBtn({ctn, logo, alt}) {
  return (
    <div className='btn btn-ghost rounded-full hover:btn-primary hover:text-[white]'>
      {!ctn && ctn.length === 0 ? <img src={logo} alt={alt} /> : `${ctn}`}
    </div>
  )
}
