import { useEffect } from "react"
import { Link, Outlet, useNavigate, useParams } from "react-router-dom"
import Banner from "../Component/Banner/Banner"
import BlogChooseBar from "../Component/BlogUIPage/BlogChooseBar"
import BloggerIntroCard from "../Component/BlogUIPage/BloggerIntroCard"
import HotProductCard from "../Component/LandingPage/HotProductCard"
import BLOGGER_DATA from "../Data/BLOGGER_DATA.json"
import HOT_PRODUCT_DATA from "../Data/HOT_PRODUCT_DATA.json"
import BLOG_DATA from "../Data/BLOG_DATA.json"

export default function BlogUIPage() {
  const { bloggerid } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    if (bloggerid > BLOGGER_DATA.length) {
      navigate("/SLOMO-HK/error")
    }
  }, [])

  const blogger = BLOGGER_DATA.find(
    (item) => parseInt(item.bloggerId) === parseInt(bloggerid)
  )

  const blogs = BLOG_DATA.filter(
    (item) => parseInt(item.bloggerId) === parseInt(bloggerid)
  )

  return (
    <div className="wrapper">
      <Banner src={blogger && blogger.banner} height="20rem" />

      <div className="pt-12 pb-16">
        <div className="flex flex-row justify-between w-full">
          <div className="w-[30%]">
            <BloggerIntroCard
              profile={blogger && blogger.profile}
              name={blogger && blogger.name}
              intro={blogger && blogger.intro}
            />
            <BlogChooseBar blogData={blogs ? blogs : null} />
          </div>
          <div className="w-[65%] h-full">
            <Outlet />
          </div>
        </div>

        <div>
          <p className="pt-20 pb-10 text-[2.25rem] font-medium">熱門活動推介</p>
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
    </div>
  )
}
