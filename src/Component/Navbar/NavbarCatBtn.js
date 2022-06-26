import React from 'react'
import style from './NavbarCatBtn.module.css'

export default function NavbarCatBtn({cat}) {
  return (
    <div className={style.NavbarCatBtn} >
      {cat}
    </div>
  )
}
