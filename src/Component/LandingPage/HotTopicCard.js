import style from "./HotTopicCard.module.css"

export default function HotTopicCard({ title, image }) {
  const divClassName =
    "w-full aspect-video overflow-hidden rounded-[1rem] relative flex justify-start cursor-pointer"
  const imgClassName = "h-full w-auto absolute top-0 left-0 object-cover"
  const titleClassName =
    "absolute bottom-[2rem] text-[1.25rem] text-[white] transition-all duration-300 px-8"

  return (
    <div>
      <div className={`${divClassName} ${style.hoverCard}`}>
        <div className={`absolute w-full h-full transition-all duration-300 ease-in-out ${style.blur}`}>
          <img src={image} alt="Img Blogger" className={`${imgClassName} ${style.image}`} />
          <p
            className={`${titleClassName} ${style.title}`}
            style={{ lineHeight: "1.5rem" }}
          >
            {title}
          </p>
        </div>
        <div className={style.overlay}></div>

        <p className={style.hoverText}>Read More</p>
      </div>
    </div>
  )
}
