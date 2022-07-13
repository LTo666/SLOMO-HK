import { useEffect } from "react"
import { useParams, Link, useNavigate } from "react-router-dom"
import ProductCard from "../Component/CategoryPage/ProductCard"
import OverlayDiv from "../Component/OverlayDiv"
import PRODUCT_DATA from "../Data/PRODUCT_DATA.json"

export default function CategoryPage() {
  const { cat } = useParams()
  const navigate = useNavigate()

  const catMatching = [
    {
      name: "酒店",
      PATH_URL: "hotel",
      img: "https://bit.ly/3P7ZIEf",
      bannerTitle: "Staycation",
      bannerCtn: "讓你在休閒嘅時光充充電",
    },
    {
      name: "家庭",
      PATH_URL: "family",
      img: "https://bit.ly/3OORiSh",
      bannerTitle: "共享天倫之樂",
      bannerCtn: "",
    },
    {
      name: "情侶",
      PATH_URL: "couple",
      img: "https://bit.ly/3yn2SNM",
      bannerTitle: "手牽手",
      bannerCtn: "締造夢幻與浪漫的回憶",
    },
    {
      name: "冒險",
      PATH_URL: "adventure",
      img: "https://bit.ly/3P809hR",
      bannerTitle: "探索香港",
      bannerCtn: "齊來揭開佢最神秘嘅一面",
    },
    {
      name: "餐廳",
      PATH_URL: "restaurant",
      img: "https://media.timeout.com/images/105579015/1372/772/image.jpg",
      bannerTitle: "辛苦搵嚟志在食",
      bannerCtn: "",
    },
  ]

  useEffect(() => {
    if (catMatching.find((item) => item.PATH_URL === cat) === undefined) {
      navigate("/error")
    }
  }, [])

  const catFiltered = catMatching.find((item) => item.PATH_URL === cat)

  const filtered =
    catFiltered &&
    PRODUCT_DATA.filter((item) => item.category.includes(catFiltered.name))

  return (
    <div className="bg-base-200 pb-[4rem]">
      <div className="w-full h-[20rem] relative">
        <img
          src={catFiltered && catFiltered.img}
          alt=""
          style={{
            width: "100%",
            height: `100%`,
            overflow: "hidden",
            objectFit: "cover",
            position: "absolute",
            filter: "blur(3px)",
          }}
        />
        <OverlayDiv opacity="0.3" />
        <div
          className="absolute text-white text-6xl text-center top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
        >
          {catFiltered &&
            catFiltered.bannerTitle.length > 0 &&
            catFiltered.bannerTitle}
          <div className="mt-6 text-3xl">
            {catFiltered &&
              catFiltered.bannerCtn.length > 0 &&
              catFiltered.bannerCtn}
          </div>
        </div>
      </div>
      <div className="wrapper">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] gap-x-4 gap-y-8 pt-[3rem] justify-items-center">
          {filtered &&
            filtered.map((item) => {
              return (
                <Link to={`/product/${item.pid}`} key={item.pid}>
                  <ProductCard
                    title={item.name}
                    description={item.description}
                    star={item.star}
                    joined={item.joined}
                    comment={item.comment}
                    price={item.price}
                    img={item.photo_links_2}
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
