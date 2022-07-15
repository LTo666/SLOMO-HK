import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import CartProductCard from "./CartProductCard"
import Modal from "../Modal"

export default function CartListWithProduct({ shoppingList }) {
  const isLoggedIn = useSelector((state) => state.authStore.isLoggedIn)
  const navigate = useNavigate()

  const CartProductElems =
    shoppingList.length > 0 &&
    shoppingList.map((item, id) => {
      let isLast = false
      if (shoppingList.length - 1 === id) {
        isLast = true
      }
      return (
        <CartProductCard
          image={item.photo_links[0]}
          title={item.name}
          desc={item.description}
          date={item.date}
          amount={"1"}
          price={item.price}
          pid={item.pid}
          idx={id}
          key={id}
          isLast={isLast}
          isAbleBin={true}
        />
      )
    })

  const totalPrice =
    shoppingList.length > 0 &&
    shoppingList
      .map((item) => item.price)
      .reduce((acc, cur) => {
        return acc + cur
      })

  const modalId = "login-modal"

  const payBtn =
    isLoggedIn && shoppingList.length > 0 ? (
      <div
        className="btn rounded-[0.5rem] transition-all duration-300 ease-out btn-primary w-full text-lg"
        onClick={() =>
          isLoggedIn && shoppingList.length > 0 && navigate("/cart/fillnpay")
        }
      >
        付款
      </div>
    ) : (
      <label
        for={modalId}
        className="btn modal-button rounded-[0.5rem] transition-all duration-300 ease-out btn-primary w-full text-lg"
      >
        付款
      </label>
    )

  return (
    <div>
      <div className="px-8 py-6 min-h-[25rem]">{CartProductElems}</div>

      <div
        className="flex flex-rows items-end px-8 pt-4 pb-6 gap-4"
        style={{ borderTop: "1px solid #ffffff" }}
      >
        <div className="basis-9/12 mr-[3rem] text-primary flex">
          <svg
            version="1.1"
            id="Capa_1"
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 512 512"
            width="1rem"
            fill="currentColor"
          >
            <path
              d="M328.2,53.3c-23.8,23.8-47.6,47.6-71.4,71.4s-47.6,47.6-71.4,71.4c-13.5,13.5-26.9,26.9-40.4,40.4
              c-10.5,10.5-10.5,28.4,0,38.9c23.8,23.8,47.6,47.6,71.4,71.4s47.6,47.6,71.4,71.4c13.5,13.5,26.9,26.9,40.4,40.4
              c5,5,12.4,8.1,19.4,8.1c3.8,0.1,7.3-0.6,10.6-2.4c3.4-1.1,6.4-3,8.9-5.7c4.8-5.2,8.4-12.1,8.1-19.4c-0.3-7.3-2.8-14.2-8.1-19.4
              c-23.8-23.8-47.6-47.6-71.4-71.4c-23.8-23.8-47.6-47.6-71.4-71.4c-13.5-13.5-26.9-26.9-40.4-40.4c0,13,0,25.9,0,38.9
              c23.8-23.8,47.6-47.6,71.4-71.4s47.6-47.6,71.4-71.4c13.5-13.5,26.9-26.9,40.4-40.4c5-5,8.1-12.4,8.1-19.4
              c0.1-3.8-0.6-7.3-2.4-10.6c-1.1-3.4-3-6.4-5.7-8.9c-5.2-4.8-12.1-8.4-19.4-8.1C340.3,45.6,333.4,48.1,328.2,53.3L328.2,53.3z"
            />
          </svg>
          <span className="ml-4 hover:underline cursor-pointer" onClick={()=>{navigate("/")}}>繼續購物</span>
        </div>
        <div className="basis-2/12 text-end pr-4">
          <p className="text-[1.5rem] leading-8 text-primary font-bold">
            HK$ {totalPrice}
          </p>
          <p className="text-[0.75rem] leading-4">
            {shoppingList.length} 件商品
          </p>
        </div>
        <div className="basis-1/12 mt-2">{payBtn}</div>
      </div>
      <Modal
        title={"你尚未登入！"}
        ctn={"請先登入，以繼續購買心水產品。"}
        btn={"登入"}
        modalId={modalId}
      />
    </div>
  )
}
