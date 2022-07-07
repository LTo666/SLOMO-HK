import { useLocation, useNavigate } from "react-router-dom"
import Cart from "../Component/ShoppingCartPage/Cart"
import FillAndPay from "../Component/ShoppingCartPage/FillAndPay"
import { useSelector } from "react-redux"
import SubmitedOrder from "../Component/ShoppingCartPage/SubmitedOrder"

export default function ShoppingCartPage() {
  const shopData = useSelector((state) => state.cartStore.cartList)
  const location = useLocation()
  const navigate = useNavigate()

  const currentStep =
    location.pathname === "/cart/list" ? (
      <ul className="steps py-8">
        <li className="step step-primary text-primary text-xl mx-16 font-semibold">購物車</li>
        <li className="step">填寫資料與付款</li>
        <li className="step">訂購完成</li>
      </ul>
    ) : location.pathname === "/cart/fillnpay" ? (
        <ul className="steps py-8">
          <li className="step step-primary mx-16 cursor-pointer font-semibold hover:text-primary" onClick={() => {navigate(-1)}}>購物車</li>
          <li className="step step-primary text-primary text-xl font-semibold">填寫資料與付款</li>
          <li className="step">訂購完成</li>
        </ul>
    ) : (
      <ul className="steps py-8">
          <li className="step step-primary mx-16 font-semibold">購物車</li>
          <li className="step step-primary font-semibold">填寫資料與付款</li>
          <li className="step step-primary text-primary text-xl">訂購完成</li>
        </ul>
    )

  return (
    <div className="bg-base-200 min-h-[50rem]">
      <div className="wrapper">
        <div className="pb-10">
          <div className="flex justify-center">{currentStep}</div>
          {location.pathname === "/cart/list" ? <Cart shopData={shopData} /> : location.pathname === "/cart/fillnpay" ? <FillAndPay shopData={shopData} /> : <SubmitedOrder />}
        </div>
      </div>
    </div>
  )
}
