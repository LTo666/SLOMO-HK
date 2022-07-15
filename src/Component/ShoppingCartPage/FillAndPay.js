import { useNavigate } from "react-router-dom"
import CartProductCard from "./CartProductCard"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { placeOrder } from "../../Redux/orderSlice"
import { clearCart } from "../../Redux/cartSlice"

export default function FillAndPay() {
  const shopData = useSelector((state) => state.cartStore.cartList)
  const userInfo = useSelector((state) => state.authStore.userInfo)
  const navigate = useNavigate()
  const [name, setName] = useState(userInfo.username)
  const [contactNo, setContactNo] = useState("")
  const [email, setEmail] = useState(userInfo.email)
  const [payment, setPayment] = useState("")
  const [creditCardNo, setCreditCardNo] = useState("")
  const [CSV, setCSV] = useState("")
  const dispatch = useDispatch()

  if(shopData.length === 0) {
    navigate("/cart/list")
  }

  const CartProductElems =
    shopData.length > 0 &&
    shopData.map((item, id) => {
      let isLast = false
      if (shopData.length - 1 === id) {
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
          isAbleBin={false}
        />
      )
    })

  const totalPrice =
    shopData.length > 0 &&
    shopData
      .map((item) => item.price)
      .reduce((acc, cur) => {
        return acc + cur
      })

  const order = {
    orders: [...shopData],
    customerName: name,
    customerEmail: email,
    customerContactNo: contactNo,
    paymentMethod: payment,
    creditCardNo: creditCardNo,
    CSV: CSV,
    totalPrice: totalPrice,
  }

  const placeOrderFunc = () => {
    dispatch(placeOrder(order))
    setName("")
    setEmail("")
    setContactNo("")
    setCSV("")
    setPayment("")
    setCreditCardNo("")
    dispatch(clearCart())
    shopData.length > 0 && navigate("/cart/ordered")
  }

  return (
    <div>
      <div className="flex w-full bg-base-200 mb-10">
        <div className="flex-grow card bg-base-100 rounded-box w-[34rem] h-full rounded-[1rem]">
          <div
            className="text-[2rem] py-4 px-12"
            style={{ borderBottom: "1px solid hsl(var(--b2))" }}
          >
            訂購人資料
          </div>
          <div className="py-8 px-12">
            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl">
                姓名
              </span>
              <input
                type="text"
                name="name"
                className="mt-3 mb-6 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="王小明"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl">
                聯絡電話
              </span>
              <input
                type="email"
                name="contact_no"
                className="mt-3 mb-6 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="請輸入聯絡電話"
                value={contactNo}
                onChange={(e) => setContactNo(e.target.value)}
              />
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl">
                電郵
              </span>
              <input
                type="email"
                name="email"
                className="mt-3 mb-6 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="請輸入常用電子郵件信箱"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
          </div>
        </div>

        <div className="divider divider-horizontal"></div>

        <div className=" flex-grow card bg-base-100 rounded-box w-[34rem] rounded-[1rem]">
          <div
            className="text-[2rem] py-4 px-12"
            style={{ borderBottom: "1px solid hsl(var(--b2))" }}
          >
            付款方式
          </div>
          <div className="py-8 px-12">
            <div className="grid grid-cols-2 gap-y-2 mb-3">
              <div className="form-control w-[11rem]">
                <label className="label cursor-pointer justify-start">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    checked={payment === "visa" ? true : false}
                    onClick={() =>
                      payment !== "visa" ? setPayment("visa") : setPayment("")
                    }
                  />
                  <span className="label-text pl-4">Visa</span>
                </label>
              </div>

              <div className="form-control w-[11rem]">
                <label className="label cursor-pointer justify-start">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    checked={payment === "master" ? true : false}
                    onClick={() =>
                      payment !== "master"
                        ? setPayment("master")
                        : setPayment("")
                    }
                  />
                  <span className="label-text pl-4">Master</span>
                </label>
              </div>

              <div className="form-control w-[11rem]">
                <label className="label cursor-pointer justify-start">
                  <input
                    type="checkbox"
                    className="checkbox checkbox-primary"
                    checked={payment === "american_express" ? true : false}
                    onClick={() =>
                      payment !== "american_express"
                        ? setPayment("american_express")
                        : setPayment("")
                    }
                  />
                  <span className="label-text pl-4">American Express</span>
                </label>
              </div>
            </div>

            <label className="block">
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl">
                信用卡號碼
              </span>
              <input
                type="text"
                name="credit_card"
                className="mt-3 mb-6 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="1111222233334444"
                value={creditCardNo}
                onChange={(e) => {
                  setCreditCardNo(e.target.value)
                }}
              />
              <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-xl">
                安全碼
              </span>
              <input
                type="text"
                name="CSV"
                className="mt-3 mb-6 px-3 py-2 w-[6rem] bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-primary focus:ring-primary block w-full rounded-md sm:text-sm focus:ring-1"
                placeholder="123"
                value={CSV}
                onChange={(e) => {
                  setCSV(e.target.value)
                }}
              />
            </label>
          </div>
        </div>
      </div>

      <div
        tabIndex="0"
        className="collapse collapse-arrow rounded-box transition-all duration-300 ease-out bg-base-100 mb-10"
      >
        <input type="checkbox" className="peer" />
        <div className="collapse-title transition-all duration-300 ease-out text-[2rem] py-4 px-12">
          購買產品資料
        </div>
        <div
          className="collapse-content transition-all duration-300 ease-out px-12"
          style={{ borderTop: "1px solid hsl(var(--b2))" }}
        >
          {CartProductElems}
        </div>
      </div>

      <div className="bg-base-100 rounded-box w-full flex justify-between items-center py-6">

      <div className="ml-8 mr-[3rem] text-primary flex">
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
          <span className="ml-4 hover:underline cursor-pointer" onClick={()=>{navigate(-1)}}>返回購物車</span>
        </div>

        <div className="flex">
          <div className="text-end">
            <p className="text-[1.5rem] leading-8 text-primary font-bold">
              HK$ {totalPrice}
            </p>
            <p className="text-[0.75rem] leading-4">{shopData.length} 件商品</p>
          </div>
          <div className="ml-4 mr-8">
            <div
              className="btn rounded-[0.5rem] transition-all duration-300 ease-out btn-primary w-full text-lg"
              onClick={() => placeOrderFunc()}
            >
              確認付款
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
