import { Link, useNavigate, useParams } from "react-router-dom"
import PRODUCT_DATA from "../Data/PRODUCT_DATA.json"
import HOT_PRODUCT_DATA from "../Data/HOT_PRODUCT_DATA.json"
import { useEffect } from "react"
import ProductDetail from "../Component/ProductDetail/ProductDetail"
import Carousel from "../Component/Carousel/Carousel"
import DatePickAndAddToCart from "../Component/ProductDetail/DatePickAndAddToCart"
import HotProductCard from "../Component/LandingPage/HotProductCard"

export default function ProductDetailPage() {
  const { pid } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (pid > PRODUCT_DATA.length) {
      navigate("/SLOMO-HK/error")
    }
  }, [])

  const filtered = PRODUCT_DATA.find((item) => {
    return item.pid === parseInt(pid)
  })

  return (
    <div className="wrapper">
      <div>
        <Carousel
          slides={filtered.photo_links}
          controls
          indicators
          height="500px"
          interval={filtered.photo_links.length * 2000}
        />
      </div>

      <div className="flex flex-row space-x-8 my-12">
        <div className="basis-2/3">
          <ProductDetail
            name={filtered.name}
            description={filtered.description}
            location={filtered.location}
            category={filtered.category}
            star={filtered.star}
            joined={filtered.joined}
            comment={filtered.comment}
            photos={filtered.photo_links}
          />
        </div>
        <div className="basis-1/3">
          <DatePickAndAddToCart product={filtered} />
        </div>
      </div>

      <div className="mb-20">
        <p className="pb-10 text-[2.25rem] font-medium">
          你可能還會喜歡⋯⋯
        </p>
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] gap-x-4 gap-y-8 justify-items-center">
          {HOT_PRODUCT_DATA.map((item, id) => {
            return (
              <Link to={`/SLOMO-HK/product/${item.pid}`} key={id}>
                <HotProductCard
                  title={item.name}
                  star={item.star}
                  joined={item.joined}
                  comment={item.comment}
                  price={item.price}
                  location={item.location[1]}
                  img={item.photo_links[1]}
                  key={id}
                />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
