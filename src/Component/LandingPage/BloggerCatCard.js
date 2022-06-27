import React from "react"
import style from "./BloggerCatCard.module.css"

export default function BloggerCatCard({ isVdo }) {
  const divClassName = "w-full h-[20rem] overflow-hidden rounded-[1rem] relative flex justify-center cursor-pointer"
  const imgClassName = "h-full w-auto absolute top-0 left-0 object-cover"
  const titleClassName = "z-20 absolute bottom-[2rem] text-[1.75rem] text-[white] transition-all duration-300"

  return (
    <div>
      {isVdo === false ? (
        <div className={`${divClassName} ${style.overlay}`}>
          <img
            src="https://cdn.mos.cms.futurecdn.net/gvQ9NhQP8wbbM32jXy4V3j-970-80.jpg.webp"
            alt="Img Blogger"
            className={`${imgClassName}`}
          />
          <p className={`${titleClassName} ${style.placement}`}>Photo Blogger</p>
        </div>
      ) : (
        <div className={`${divClassName} ${style.overlay}`}>
          <img
            src="https://assets.videomaker.com/2021/04/AV-recorders.jpg"
            alt="Vdo Blogger"
            className={`${imgClassName}`}
          />
          <p className={`${titleClassName} ${style.placement}`}>Video Blogger</p>
        </div>
      )}
    </div>
  )
}
