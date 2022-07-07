import style from "./BloggerCatCard.module.css"

export default function BloggerCatCard({ isVdo }) {
  const divClassName = "w-full h-[16rem] overflow-hidden rounded-[1rem] relative flex justify-start cursor-pointer transition-all duration-300"
  const imgClassName = "h-auto w-full absolute top-0 left-0 object-cover"
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
          <p className={`${titleClassName} ${style.placement}`}>相片網誌</p>
        </div>
      ) : (
        <div className={`${divClassName} ${style.overlay}`}>
          <img
            src="https://assets.videomaker.com/2021/04/AV-recorders.jpg"
            alt="Vdo Blogger"
            className={`${imgClassName}`}
          />
          <p className={`${titleClassName} ${style.placement}`}>影片網誌</p>
        </div>
      )}
    </div>
  )
}
