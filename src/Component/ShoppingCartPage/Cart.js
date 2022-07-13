import { useSelector } from "react-redux"
import CartListWithoutProduct from "./CartListWithoutProduct"
import CartListWithProduct from "./CartListWithProduct"

export default function Cart() {
  const shopData = useSelector((state) => state.cartStore.cartList)

  return (
    <div className="bg-base-100 rounded-[1rem]">
      <div
        className="text-[2.25rem] py-4 px-8"
        style={{ borderBottom: "1px solid hsl(var(--b2))" }}
      >
        購物車
      </div>
      {shopData.length > 0 ? (
        <CartListWithProduct shoppingList={shopData} />
      ) : (
        <CartListWithoutProduct />
      )}
    </div>
  )
}
