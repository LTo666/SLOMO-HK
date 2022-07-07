import { useParams, Link } from "react-router-dom"
import Banner from "../Component/Banner/Banner"
import ProductCard from "../Component/CategoryPage/ProductCard"
import PRODUCT_DATA from "../Data/PRODUCT_DATA.json"

export default function CategoryPage() {
  const { cat } = useParams()

  const catMatching = [
    { name: "酒店", PATH_URL: "hotel" },
    { name: "家庭", PATH_URL: "family" },
    { name: "情侶", PATH_URL: "couple" },
    { name: "冒險", PATH_URL: "aventure" },
    { name: "住宿", PATH_URL: "staycation" },
    { name: "更多", PATH_URL: "more" },
  ]

  const catFiltered = catMatching.find((item) => item.PATH_URL === cat)

  const filtered = PRODUCT_DATA.filter((item) =>
    item.category.includes(catFiltered.name)
  )

  return (
    <div className="bg-base-200 pb-[4rem]">
      <Banner height="400px" />
      <div className="wrapper">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] gap-x-4 gap-y-8 pt-[3rem] justify-items-center">
          {filtered.map((item) => {
            return (
              <Link to={`/product/${item.pid}`} key={item.pid}>
                <ProductCard
                  title={item.name}
                  description={item.description}
                  star={item.star}
                  joined={item.joined}
                  comment={item.comment}
                  price={item.price}
                  key={item.pid}
                />
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
