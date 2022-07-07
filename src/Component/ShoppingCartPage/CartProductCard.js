import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { removeFromCart } from "../../Redux/cartSlice"
import style from "./CartProductCard.module.css"

export default function CartProductCard({
  image,
  title,
  desc,
  date,
  amount,
  price,
  idx,
  pid,
  isLast,
  isAbleBin
}) {
  const dispatch = useDispatch()
  const removeTargetFromCart = () => {
    dispatch(removeFromCart(idx))
  }
  const navigate = useNavigate()

  const lastClass = isLast === false ? "pb-2 mb-6" : ""

  const bin = isAbleBin === false ? <></> : (<div className="cursor-pointer" onClick={() => removeTargetFromCart()}>
  <svg
    version="1.1"
    id="Cart"
    xmlns="http://www.w3.org/2000/svg"
    x="0px"
    y="0px"
    viewBox="0 0 16 16"
    width="1.5rem"
    fill="currentColor"
  >
    <path
      d="M14,12.6v-1.1H4.6l0.6-1.1l9.2-0.9l1.6-6H3.7L3,0.5H0v1h2.2l2.1,8.4L3,12.5V14c0,0.8,0.7,1.5,1.5,1.5
S6,14.8,6,14s-0.7-1.5-1.5-1.5H12V14c0,0.8,0.7,1.5,1.5,1.5S15,14.8,15,14C15,13.3,14.6,12.8,14,12.6z M4,4.5h10.7l-1.1,4L5.2,9.4
L4,4.5z"
    />
  </svg>
</div>)

  return (
    <div
      className={`flex flex-rows ${lastClass} gap-x-4 items-start pt-4`}
    >
      <div className={"basis-2/12 rounded-[0.5rem] overflow-hidden relative cursor-pointer " + style.imgDiv} onClick={()=>navigate(`/product/${pid}`)}>
        <img src={image} alt="" className="w-full aspect-video" />
        <div className={style.overlay}></div>
      </div>
      <div className="basis-3/12">
        <p className={"font-bold text-xl leading-7 cursor-pointer hover:underline " + style.textOverflowDot} onClick={()=>navigate(`/product/${pid}`)}>{title}</p>
        <p className={"pt-2 leading-7 " + style.textOverflowDot}>{desc}</p>
      </div>
      <div className="basis-2/12 text-end">{date}</div>
      <div className="basis-2/12 text-center">x{amount}</div>
      <div className="basis-2/12 text-center text-primary font-semibold">
        HK$ {price}
      </div>
      <div className="basis-1/12 flex justify-center">
        {bin}
      </div>
    </div>
  )
}
