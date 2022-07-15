import CartBtnProductCard from "./CartBtnProductCard";

export default function CartBtnProductDiv({ shopData }) {
  console.log(shopData)


  const CartProductElems =
    shopData.length > 0 &&
    shopData.map((item, id) => {
      let isLast = false
      if (shopData.length - 1 === id) {
        isLast = true
      }
      return (
        <CartBtnProductCard
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
        />
      )
    })

  return (
    <div
      className="h-full w-full p-6"
      style={{ borderBottom: "0.2px solid lightgray" }}
    >
      {CartProductElems}
    </div>
  )
}
