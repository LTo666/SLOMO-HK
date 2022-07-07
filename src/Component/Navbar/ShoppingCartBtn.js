import { useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"

export default function ShoppingCartBtn() {
  const navigate = useNavigate()
  const shoppingList = useSelector((state) => state.cartStore.cartList)

  const indicator = shoppingList.length > 0 && (
    <span
      className="indicator-item badge badge-secondary text-[white]"
      style={{
        top: "0.75rem",
        right: "1.25rem",
        fontSize: "0.75rem",
        borderRadius: "100%",
        width: "1px",
        aspectRatio: "round",
      }}
    >
      {shoppingList.length}
    </span>
  )

  return (
    <div>
      <div
        className="indicator btn rounded-full transition-all duration-300 ease-out btn-ghost"
        onClick={() => {
          navigate("/cart/list")
        }}
      >
        {indicator}
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
      </div>
    </div>
  )
}
