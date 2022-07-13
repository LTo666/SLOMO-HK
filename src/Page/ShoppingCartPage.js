import { Navigate, Outlet, useLocation, useNavigate } from "react-router-dom"

export default function ShoppingCartPage() {
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
    ) :location.pathname === "/cart/ordered" ? (
      <ul className="steps py-8">
          <li className="step step-primary mx-16 font-semibold">購物車</li>
          <li className="step step-primary font-semibold">填寫資料與付款</li>
          <li className="step step-primary text-primary text-xl">訂購完成</li>
        </ul>
    ) : <Navigate to="/error" />

  return (
    <div className="bg-base-200 min-h-[50rem]">
      <div className="wrapper">
        <div className="pb-10">
          <div className="flex justify-center">{currentStep}</div>
          <Outlet/>
        </div>
      </div>
    </div>
  )
}
