import CatCard from "../Component/LandingPage/CatCard"
import HotTopicCard from "../Component/LandingPage/HotTopicCard"
import HotProductCard from "../Component/LandingPage/HotProductCard"
import HotBloggerCard from "../Component/LandingPage/HotBloggerCard"
import HOT_PRODUCT_DATA from "../Data/HOT_PRODUCT_DATA.json"
import { Link } from "react-router-dom"
import Hero from "../Component/Hero/Hero"

export default function LandingPage() {
  const hotBlogData = [
    {
      title:
        "龍蝦灣郊遊徑｜行山路線2小時完！綠蛋島/火石洲/果洲群島360度無敵海景",
      img: "https://bit.ly/3AOrjqj",
    },
    {
      blogId: "11",
      bloggerId: "3",
      title: "香港最高山一日遊",
      img: "https://bit.ly/3yJYNV7",
    },
    {
      blogId: "12",
      bloggerId: "4",
      title: "寶雲道合家歡樂遊｜新手行山郊遊路線 沿路拜姻緣石",
      img: "https://bit.ly/3RjdB4g",
    },
    {
      title: "深水埗主教山配水庫免費導賞團5.16起復辦！參觀古羅馬式建築",
      img: "https://bit.ly/3IjOPgp",
    },
    {
      blogId: "7",
      bloggerId: "1",
      title: "鶴咀一日遊路線！3個鐘行完 4大必到打卡位 簡單易走＋平路多",
      img: "https://bit.ly/3NQqC2c",
    },
    {
      blogId: "2",
      bloggerId: "2",
      title: "長沙灣麗閣商場 塗鴉貨櫃打卡位 12間掃街新食場",
      img: "https://hk.ulifestyle.com.hk/cms/images/event/1024/201912/20191223185418_0_01.jpg",
    },
  ]

  const cat = [
    {
      name: "酒店",
      PATH_URL: "hotel",
      img: "https://images.trvl-media.com/hotels/1000000/30000/25700/25691/c4afc819.jpg?impolicy=resizecrop&rw=1200&ra=fit",
    },
    {
      name: "家庭",
      PATH_URL: "family",
      img: "https://images.lifestyleasia.com/wp-content/uploads/sites/2/2020/10/17165519/hong-kong-best-picnic-spots-west-kowloon-art-park-1024x767.jpg",
    },
    {
      name: "情侶",
      PATH_URL: "couple",
      img: "https://d2d5f3568fvb9s.cloudfront.net/wp-content/uploads/2022/01/19145659/Untitled-design-7-960x500.jpg",
    },
    {
      name: "冒險",
      PATH_URL: "adventure",
      img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6a/c9/e8.jpg",
    },
    {
      name: "餐廳",
      PATH_URL: "restaurant",
      img: "https://images.lifestyleasia.com/wp-content/uploads/sites/2/2022/01/06235301/new-dining-restrictions-hours-1600x900.jpg",
    },
  ]

  const hotBlogger = [
    {
      bloggerId: "1",
      img: "https://bit.ly/3PbcHVH",
      name: "Bosco",
    },
    {
      bloggerId: "2",
      img: "https://bit.ly/3ahgQsB",
      name: "Charmaine",
    },
    {
      bloggerId: "3",
      img: "https://bit.ly/3bLm0x6",
      name: "Chauency",
    },
    {
      bloggerId: "4",
      img: "https://bit.ly/3bX0CVD",
      name: "Bruce",
    },
    {
      bloggerId: "5",
      img: "https://static.toiimg.com/thumb/msid-20728080,width-800,height-600,resizemode-75/20728080.jpg",
      name: "Sid",
    },
    {
      bloggerId: "6",
      img: "http://i1.wp.com/inews.gtimg.com/newsapp_match/0/8942943916/0",
      name: "Ada",
    },
  ]

  return (
    <div className="pb-[4rem]">
      <div className="h-[500px]">
        <Hero />
      </div>

      <div className="wrapper relative">
        <div>
          <p className="pt-20 pb-10 text-[2.25rem] font-medium">精選類別</p>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(8rem,_1fr))] gap-6">
            {cat.map((item, id) => {
              return (
                <Link to={`/category/${item.PATH_URL}`} key={id}>
                  <CatCard title={item.name} img={item.img} />
                </Link>
              )
            })}
          </div>
        </div>

        <div>
          <p className="pt-20 pb-10 text-[2.25rem] font-medium">熱門活動</p>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] gap-x-4 gap-y-8 justify-items-center">
            {HOT_PRODUCT_DATA.map((item, id) => {
              return (
                <Link to={`/product/${item.pid}`} key={id}>
                  <HotProductCard
                    title={item.name}
                    star={item.star}
                    joined={item.joined}
                    comment={item.comment}
                    price={item.price}
                    location={item.location[1]}
                    img={item.photo_links[0]}
                    key={id}
                  />
                </Link>
              )
            })}
          </div>
        </div>

        <div>
          <p className="pt-20 pb-10 text-[2.25rem] font-medium">人氣冒險家</p>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(10rem,_1fr))] gap-6 justify-items-center">
            {hotBlogger.map((item, id) => {
              return (
                <Link to={`/blogger/${item.bloggerId}`} key={id}>
                  <HotBloggerCard img={item.img} name={item.name} />
                </Link>
              )
            })}
          </div>
        </div>

        <div>
          <p className="pt-20 pb-10 text-[2.25rem] font-medium">近期熱門網誌</p>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(18rem,_1fr))] gap-6">
            {hotBlogData.map((item, id) => {
              return item.blogId && item.bloggerId ? (
                <Link to={`/blogger/${item.bloggerId}/blog/${item.blogId}`} key={id}>
                  <HotTopicCard title={item.title} image={item.img} key={id} />
                </Link>
              ) : <HotTopicCard title={item.title} image={item.img} key={id} />
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
