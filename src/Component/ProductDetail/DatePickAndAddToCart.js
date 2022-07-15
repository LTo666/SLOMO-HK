import { useState } from "react"
import { DayPicker } from "react-day-picker"
import { useDispatch } from "react-redux"
import { format } from "date-fns"
import { addToCart } from "../../Redux/cartSlice"
import "react-day-picker/dist/style.css"
import "./day-picker.css"

export default function DatePickAndAddToCart({ product }) {
  const dispatch = useDispatch()
  const [startDate, setStartDate] = useState(null)
  const [noDateClass, setNoDateClass] = useState("text-zinc-400")

  const now = new Date()

  const disabledDays = [
    {
      from: new Date(1),
      to: new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1),
    },
  ]

  const defaultMonth = new Date(now.getFullYear(), now.getMonth())

  const setDateFunc = (date) => {
    const yyyy = date.getFullYear()
    let mm = date.getMonth() + 1 // Months start at 0!
    let dd = date.getDate()

    if (dd < 10) dd = "0" + dd
    if (mm < 10) mm = "0" + mm

    const formattedToday = yyyy + "-" + mm + "-" + dd
    return formattedToday
  }

  let footer = <p className={`text-center ${noDateClass}`}>請選擇日期</p>
  if (startDate) {
    footer = (
      <p className="text-zinc-400 text-center">
        你選擇的日期：{setDateFunc(startDate)}
      </p>
    )
  }


  

  const clickFuncForAddToCart = () => {
    if (!startDate) {
      setNoDateClass("text-secondary")
    } else {
      let p = { ...product }
      p.date = setDateFunc(startDate)
      dispatch(addToCart(p))
    }
  }

  return (
    <div
      className="sticky top-[7rem] p-8 rounded-xl space-y-8"
      style={{ border: "0.1px solid lightgray" }}
    >
      <div className="text-2xl font-medium text-black">選擇日期</div>
      <DayPicker
        mode="single"
        selected={startDate}
        onSelect={setStartDate}
        disabled={disabledDays}
        footer={footer}
        defaultMonth={defaultMonth}
        fromMonth={defaultMonth}
        toDate={new Date(2035, 0, 1)}
      />

      <div className="flex justify-between items-center">
        <p className="text-2xl font-semibold">HK$ {product.price}</p>
        <div
          onClick={() => clickFuncForAddToCart()}
          className="btn btn-primary"
        >
          加入購物車
        </div>
      </div>
    </div>
  )
}
