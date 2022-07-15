import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import OrderedProduct from "./OrderedProduct"

export default function SubmitedOrder() {
  const ordereds = useSelector((state) => state.orderStore.order)
  const ordered = ordereds[ordereds.length - 1]
  const navigate = useNavigate()

  const tdy = () => {
    const now = new Date()
    const tdyDate = now.getDate()
    const tdyMounth = now.getMonth() + 1
    const tdyYear = now.getFullYear()
    return `${tdyYear}-${tdyMounth}-${tdyDate}`
  }

  return (
    <div className="bg-base-100 rounded-[1rem] py-8 px-16">
      <div className="text-[2.25rem]">你好 {ordered.customerName}！</div>

      {/* <div className="flex justify-center mt-8 mb-4">
        <img src="https://www.amfori.org/sites/default/files/tick.png" alt="" />
      </div> */}

      <div className="text-lg mt-2">
        我們已成功為你訂購，訂購確認電郵已傳送到電郵地址 {ordered.customerEmail}
      </div>

      <div className="text-base mb-8 mt-4">
        <div>訂單編號：{"1000000001"}</div>
        <div>訂購日期：{tdy()}</div>
        <div>聯絡電話：{ordered.customerContactNo}</div>
        <div>訂購總額：＄{ordered.totalPrice}</div>
      </div>

      <div className="grid grid-cols-2 gap-4 py-[2rem]" style={{ borderTop: "1px solid lightgray" }}>
        {ordered.orders.map((item, id) => {
          return (
            <OrderedProduct
              pid={item.pid}
              name={item.name}
              img={item.photo_links[2]}
              price={item.price}
              date={item.date}
              amount={"1"}
              key={id}
            />
          )
        })}
      </div>
      <div className="flex flex-col justify-center pt-[2rem]" style={{ borderTop: "1px solid lightgray" }}>
        <div className="text-5xl leading-[4rem]">
          謝謝你使用SloMo香港。<p className="pt-6">別讓旅行就在此止步，為你下一段探索旅程做更好的準備，讓你的生活充滿美好！</p>
          
        </div>{" "}
        <div className="flex justify-end mt-12 mb-4">
          <div
            className="btn btn-primary text-2xl btn-lg"
            onClick={() => navigate("/")}
          >
            發掘更多精彩節目和內容
          </div>
        </div>
      </div>
    </div>
  )
}
