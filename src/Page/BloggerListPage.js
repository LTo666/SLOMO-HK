import BloggerCard from "../Component/BloggerListPage/BloggerCard"
import { Link } from "react-router-dom"
import BLOGGER_DATA from "../Data/BLOGGER_DATA.json"
import OverlayDiv from "../Component/OverlayDiv"

export default function BloggerListPage() {
  const bloggers = BLOGGER_DATA

  return (
    <div className="bg-base-100">
      <div className="w-full h-[20rem] relative">
        <img
          src="https://bit.ly/3ajzVtU"
          alt=""
          style={{
            width: "100%",
            height: `100%`,
            overflow: "hidden",
            objectFit: "cover",
            position: "absolute",
            filter: "blur(2px)"
          }}
        />
        <OverlayDiv opacity="0.3" />
        <div
          className="absolute text-white text-5xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
        >
          SloMo冒險家各有所好，
          <div className="mt-6">跟著他們同你漫遊香港！</div>
        </div>
      </div>

      <div className="wrapper">
        <div className="flex flex-wrap justify-center gap-x-[2rem] gap-y-[3rem] py-[5rem]">
          {bloggers.map((item, id) => {
            return (
              <Link to={`/blogger/${item.bloggerId}`} key={id}>
                <BloggerCard
                  profilepic={item.profile}
                  banner={item.banner}
                  name={item.name}
                  intro={item.intro}
                ></BloggerCard>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
