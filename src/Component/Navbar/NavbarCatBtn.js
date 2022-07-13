import React from "react"
import style from "./NavbarCatBtn.module.css"

export default function NavbarCatBtn({ cat, islast }) {
  const lastBorder = islast ? "" : "border-r-[0.25px] border-[lightgray]"

  return (
    <div
      className={style.NavbarCatBtn + ` text-sm`}
      style={{ paddingTop: "0.5rem" }}
    >
      <div className={`mt-2 px-6 ${lastBorder}`}>{cat}</div>
    </div>
  )
}
