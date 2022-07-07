import Map from "../Component/LandingPage/Map"
import BloggerCatCard from "../Component/LandingPage/BloggerCatCard"
import CatCard from "../Component/LandingPage/CatCard"
import HotTopicCard from "../Component/LandingPage/HotTopicCard"
import HotProductCard from "../Component/LandingPage/HotProductCard"
import PRODUCT_DATA from "../Data/PRODUCT_DATA.json"
import { Link } from "react-router-dom"

export default function LandingPage() {
  const hotBlogData = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing cjioexzcgvads",
      img: "https://cdn.mos.cms.futurecdn.net/gvQ9NhQP8wbbM32jXy4V3j-970-80.jpg.webp",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing cjioexzcgvads",
      img: "https://cdn.mos.cms.futurecdn.net/gvQ9NhQP8wbbM32jXy4V3j-970-80.jpg.webp",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing cjioexzcgvads",
      img: "https://cdn.mos.cms.futurecdn.net/gvQ9NhQP8wbbM32jXy4V3j-970-80.jpg.webp",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing cjioexzcgvads",
      img: "https://cdn.mos.cms.futurecdn.net/gvQ9NhQP8wbbM32jXy4V3j-970-80.jpg.webp",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing cjioexzcgvads",
      img: "https://cdn.mos.cms.futurecdn.net/gvQ9NhQP8wbbM32jXy4V3j-970-80.jpg.webp",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing cjioexzcgvads",
      img: "https://cdn.mos.cms.futurecdn.net/gvQ9NhQP8wbbM32jXy4V3j-970-80.jpg.webp",
    },
  ]

  const cat = [
    { name: "酒店", PATH_URL: "hotel" },
    { name: "家庭", PATH_URL: "family" },
    { name: "情侶", PATH_URL: "couple" },
    { name: "冒險", PATH_URL: "aventure" },
    { name: "住宿", PATH_URL: "staycation" },
    { name: "更多", PATH_URL: "more" },
  ]

  return (
    <div className="pb-[4rem]">
      <Map />

      <div className="wrapper">
        <div>
          <p className="pt-12 pb-6 text-[2.5rem]">精選類別</p>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(8rem,_1fr))] gap-6">
            {cat.map((item, id) => {
              return (
                <Link to={`/category/${item.PATH_URL}`} key={id}>
                  <CatCard title={item.name} />
                </Link>
              )
            })}
          </div>
        </div>

        <div>
          <p className="pt-12 pb-6 text-[2.5rem]">熱門活動</p>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] gap-x-4 gap-y-8 justify-items-center">
            {PRODUCT_DATA.map((item, id) => {
              return (
                <Link to={`/product/${item.pid}`} key={id}>
                  <HotProductCard
                    title={item.name}
                    star={item.star}
                    joined={item.joined}
                    comment={item.comment}
                    price={item.price}
                    location={item.location[1]}
                    key={id}
                  />
                </Link>
              )
            })}
          </div>
        </div>

        <div>
          <p className="pt-12 pb-6 text-[2.5rem]">網誌類別</p>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(22rem,_1fr))] gap-6">
            <BloggerCatCard isVdo={false} />
            <BloggerCatCard isVdo={true} />
          </div>
        </div>

        <div>
          <p className="pt-12 pb-6 text-[2.5rem]">近期熱門網誌</p>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] gap-6">
            {hotBlogData.map((item, id) => {
              return (
                <HotTopicCard title={item.title} image={item.img} key={id} />
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
