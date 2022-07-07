import CartListWithoutProduct from "./CartListWithoutProduct"
import CartListWithProduct from "./CartListWithProduct"

export default function Cart({ shopData }) {
  const shoppingList = shopData

  return (
    <div className="bg-base-100 rounded-[1rem]">
      <div
        className="text-[2.25rem] py-4 px-8"
        style={{ borderBottom: "1px solid hsl(var(--b2))" }}
      >
        購物車
      </div>
      {shoppingList.length === 0 ? (
        <CartListWithoutProduct />
      ) : (
        <CartListWithProduct shoppingList={shoppingList}/>
      )}
    </div>
  )
}
