import { useNavigate } from "react-router-dom"
import CartProductCard from "./CartProductCard"

export default function CartListWithProduct({shoppingList}) {
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
          image={item.photo_links_1}
          title={item.name}
          desc={item.description}
          date={"dd-mm-yyyy"}
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

  return (
    <div>
      <div className="px-8 py-6">{CartProductElems}</div>

      <div
        className="flex flex-rows items-end px-8 pt-4 pb-6 gap-4"
        style={{ borderTop: "1px solid #ffffff" }}
      >
        <div className="basis-9/12 mr-[3rem]"></div>
        <div className="basis-2/12 text-end pr-4">
          <p className="text-[1.5rem] leading-8 text-primary font-bold">
            HK$ {totalPrice}
          </p>
          <p className="text-[0.75rem] leading-4">
            {shoppingList.length} 件商品
          </p>
        </div>
        <div className="basis-1/12 mt-2">
          <div
            className="btn rounded-[0.5rem] transition-all duration-300 ease-out btn-primary w-full text-lg"
            onClick={() =>
              shoppingList.length > 0 && navigate("/cart/fillnpay")
            }
          >
            付款
          </div>
        </div>
      </div>
    </div>
  )
}
