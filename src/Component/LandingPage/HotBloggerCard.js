import { useState } from "react"

export default function HotBloggerCard({ img, name }) {
  const [style, setStyle] = useState({ img: {}, text: {}, boxPostition: {} })

  const handlingMouseEnterFunc = () => {
    setStyle({
      img: { filter: "drop-shadow(0.2rem 0.3rem 0.5rem rgb(0 0 0 / 0.3))" },
      // textShadow: { filter: "drop-shadow(2px 2px 0.2rem rgb(0 0 0 / 0.3))" },
      text: { transform: "scale(1.4)", fontWeight: "500" },
      boxPostition: { transform: "translateY(-1rem)"}
    })
  }

  const handlingMouseLeaveFunc = () => {
    setStyle({ img: {}, text: {}, boxPostition: {} })
  }

  return (
    <div
      className="w-[10.5rem] aspect-square rounded-[1rem] transition-transform duration-300 ease-out"
      onMouseEnter={() => handlingMouseEnterFunc()}
      onMouseLeave={() => handlingMouseLeaveFunc()}
      style={style.boxPostition}
    >
      <div className="avatar flex justify-center pt-3">
        <div className="w-[6rem] h-full rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 left-[50%] transition-all duration-300 ease-in-out" style={style.img}>
          <img src={img} alt="" className="" />
        </div>
      </div>
      <div
        className="pt-3 text-center text-xl transition-all duration-300 ease-in-out"
        style={style.text}
      >
        {name}
      </div>
    </div>
  )
}
