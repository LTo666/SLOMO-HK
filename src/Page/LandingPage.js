import Map from "../Component/LandingPage/Map"
import BloggerCatCard from "../Component/LandingPage/BloggerCatCard"
import CatCard from "../Component/LandingPage/CatCard"
import HotTopicCard from "../Component/LandingPage/HotTopicCard"
import HotProductCard from "../Component/LandingPage/HotProductCard"

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
  ]

  const HotProductData = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing cjioexzcgvads",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing cjioexzcgvads",
      cat: ["Man", "Spa"],
      location: ["Hong Kong", "Kowloon", "Mong Kok"],
      star: 4.5,
      joined: 34536,
      comment: 2666,
      price: 0,
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing asdcxzgedsyg",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing cjioexzcgvads",
      cat: ["Woman", "Spa"],
      location: ["Hong Kong", "Hong Kong Island", "Tai Po"],
      star: 4.5,
      joined: 4574567,
      comment: 2666,
      price: 200,
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing cvbrs gtydf",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing cjioexzcgvads",
      cat: ["Man", "Theme Park"],
      location: ["Hong Kong", "Hong Kong Island", "Tai Po"],
      star: 4.5,
      joined: 54672345,
      comment: 2456435,
      price: 300,
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing sdfgs dge r e",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing cjioexzcgvads",
      cat: ["Kid", "Theme Park"],
      location: ["Hong Kong", "Kowloon", "Tai Po"],
      star: 4.5,
      joined: 2000000,
      comment: 2666,
      price: 400,
    },
  ]

  return (
    <div className="pb-[4rem]">
      <Map />

      <div className="wrapper">
        <div>
          <p className="pt-12 pb-6 text-[2.5rem]">Categories</p>
          <div className="grid grid-cols-3 gap-6">
            <CatCard title={"Spa"} />
            <CatCard title={"Theme Park"} />
            <CatCard title={"Restaurant"} />
            {/* <CatCard title={"More"} /> */}
          </div>
        </div>

        <div>
          <p className="pt-12 pb-6 text-[2.5rem]">Hot Products</p>
          <div className="grid grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] gap-x-4 gap-y-8 justify-items-center">
            {HotProductData.map((item, id) => {
              return (
                <HotProductCard
                  title={item.title}
                  star={item.star}
                  joined={item.joined}
                  comment={item.comment}
                  price={item.price}
                  location={item.location[1]}
                />
              )
            })}
          </div>
        </div>

        <div>
          <p className="pt-12 pb-6 text-[2.5rem]">Blogger Choice</p>
          <div className="grid grid-cols-2 gap-6">
            <BloggerCatCard isVdo={false} />
            <BloggerCatCard isVdo={true} />
          </div>
        </div>

        <div>
          <p className="pt-12 pb-6 text-[2.5rem]">Hot Topics</p>
          <div className="grid grid-cols-3 gap-6">
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
