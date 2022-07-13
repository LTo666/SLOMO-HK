import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { removeFromCart } from "../../Redux/cartSlice"
import style from "./CartBtnProductCard.module.css"

export default function CartBtnProductCard({
  image,
  title,
  desc,
  date,
  amount,
  price,
  idx,
  pid,
  isLast,
}) {
  const dispatch = useDispatch()
  const removeTargetFromCart = () => {
    dispatch(removeFromCart(idx))
  }
  const navigate = useNavigate()

  const lastClass =
    isLast === false ? "pb-4 mb-2 border-b-[0.5px] border-[lightgray]" : ""

  const bin = (
    <div className="cursor-pointer hover:text-error" onClick={() => removeTargetFromCart()}>
      <svg
        version="1.1"
        id="Bin"
        xmlns="http://www.w3.org/2000/svg"
        x="0px"
        y="0px"
        viewBox="0 0 24 24"
        width="1.25rem"
        fill="currentColor"
      >
        <g>
          <g>
            <g>
              <path d="M9,3H7c0-1.7,1.3-3,3-3v2C9.4,2,9,2.4,9,3z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M17,3h-2c0-0.6-0.4-1-1-1V0C15.7,0,17,1.3,17,3z" />
            </g>
          </g>
          <g>
            <g>
              <polygon points="17,6 7,6 7,3 9,3 9,4 15,4 15,3 17,3 			" />
            </g>
          </g>
          <g>
            <g>
              <rect x="10" width="4" height="2" />
            </g>
          </g>
          <g>
            <g>
              <path d="M21,6H3C2.4,6,2,5.6,2,5s0.4-1,1-1h18c0.6,0,1,0.4,1,1S21.6,6,21,6z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M19,24H5c-0.6,0-1-0.4-1-1V9c0-0.6,0.4-1,1-1h14c0.6,0,1,0.4,1,1v14C20,23.6,19.6,24,19,24z M6,22h12V10H6V22z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M10,20c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1s1,0.4,1,1v6C11,19.6,10.6,20,10,20z" />
            </g>
          </g>
          <g>
            <g>
              <path d="M14,20c-0.6,0-1-0.4-1-1v-6c0-0.6,0.4-1,1-1s1,0.4,1,1v6C15,19.6,14.6,20,14,20z" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  )

  return (
    <div className={`flex flex-row ${lastClass} gap-x-2 items-start`}>
      <div
        className={
          "basis-3/12 rounded-[0.5rem] overflow-hidden relative cursor-pointer" +
          style.imgDiv
        }
        onClick={() => navigate(`/product/${pid}`)}
      >
        <img src={image} alt="" className="aspect-video cursor-pointer" />
      </div>

      <div className="basis-8/12 w-[14rem]">
        <div
          className={
            "truncate font-bold cursor-pointer hover:underline text-base"
          }
          onClick={() => navigate(`/product/${pid}`)}
        >
          {title}
        </div>
        <div className={"truncate py-1 text-sm"}>{desc}</div>
        <div className="text-xs py-1">{date}</div>
        <div className="text-xs">x{amount}</div>
        <div className="text-base pt-1 text-primary font-semibold">
          HK$ {price}
        </div>
      </div>

      <div className="basis-1/12 flex justify-center">{bin}</div>
    </div>
  )
}
