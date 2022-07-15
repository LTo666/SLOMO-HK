import React from "react"
import style from "./NavbarCatBtn.module.css"

export default function NavbarCatBtn({ cat, islast }) {
  const lastBorder = islast ? "" : "border-r-[0.25px] border-[lightgray]"

  const locationSVG = (
    <svg
      version="1.1"
      id="lovationSVG"
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      viewBox="0 0 321.883 321.883"
      width="1rem"
      fill="currentColor"
      className="mr-1"
    >
      <path
        d="M160.941,0c-69.035,0-125,55.964-125,125.001c0,69.035,85.187,196.882,125,196.882c39.813,0,125-127.847,125-196.882
 C285.941,55.964,229.977,0,160.941,0z M160.941,182.294c-36.341,0-65.801-29.46-65.801-65.802c0-36.34,29.46-65.801,65.801-65.801
 c36.341,0,65.801,29.461,65.801,65.801C226.742,152.834,197.282,182.294,160.941,182.294z"
      />
    </svg>
  )

  return (
    <div
      className={style.NavbarCatBtn + ` text-sm`}
      style={{ paddingTop: "0.5rem" }}
    >
      
      <div className={`flex items-center mt-2 px-6 ${lastBorder}`}>{cat === "漫遊香港" && <div>{locationSVG}</div>}{cat}</div>
    </div>
  )
}
