import { Button } from "react-daisyui"
import { useParams } from "react-router-dom"
import PRODUCT_DATA from "../Data/PRODUCT_DATA.json"
import { useDispatch } from "react-redux"
import { addToCart } from "../Redux/cartSlice"

export default function ProductDetailPage() {
  const dispatch = useDispatch()
  const { pid } = useParams()

  const filtered = PRODUCT_DATA.find((item) => {
    return item.pid === parseInt(pid)
  })

  console.log(filtered)

  const clickFuncForAddToCart = () => {
    dispatch(addToCart(filtered))
  }

  return (
    <div>
      <p>This is a page for product #{pid}</p>
      <Button onClick={()=> clickFuncForAddToCart()}>Click for adding to Cart</Button>
    </div>
  )
}
