import Banner from "../Component/Banner/Banner"
import ProductCard from "../Component/ProductPage/ProductCard"

export default function ProductPage() {
  const data = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing cjioexzcgvads",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing cjioexzcgvads",
      cat: ["Man", "Spa"],
      location: ["Hong Kong", "Kowloon", "Mong Kok"],
      star: 4.5,
      joined: 34536,
      comment: 2666,
      price: 0,
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing asdcxzgedsyg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing cjioexzcgvads",
      cat: ["Woman", "Spa"],
      location: ["Hong Kong", "Hong Kong Island", "Tai Po"],
      star: 4.5,
      joined: 4574567,
      comment: 2666,
      price: 200,
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing cvbrs gtydf",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing cjioexzcgvads",
      cat: ["Man", "Theme Park"],
      location: ["Hong Kong", "Hong Kong Island", "Tai Po"],
      star: 4.5,
      joined: 54672345,
      comment: 2456435,
      price: 300,
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing sdfgs dge r e",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing cjioexzcgvads",
      cat: ["Kid", "Theme Park"],
      location: ["Hong Kong", "Kowloon", "Tai Po"],
      star: 4.5,
      joined: 2000000,
      comment: 2666,
      price: 400,
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing cjioexzcgvads",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing cjioexzcgvads",
      cat: ["Man", "Spa"],
      location: ["Hong Kong", "Kowloon", "Mong Kok"],
      star: 4.5,
      joined: 34536,
      comment: 2666,
      price: 0,
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing asdcxzgedsyg",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing cjioexzcgvads",
      cat: ["Woman", "Spa"],
      location: ["Hong Kong", "Hong Kong Island", "Tai Po"],
      star: 4.5,
      joined: 4574567,
      comment: 2666,
      price: 200,
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing cvbrs gtydf",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing cjioexzcgvads",
      cat: ["Man", "Theme Park"],
      location: ["Hong Kong", "Hong Kong Island", "Tai Po"],
      star: 4.5,
      joined: 54672345,
      comment: 2456435,
      price: 300,
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing sdfgs dge r e",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing cjioexzcgvads",
      cat: ["Kid", "Theme Park"],
      location: ["Hong Kong", "Kowloon", "Tai Po"],
      star: 4.5,
      joined: 2000000,
      comment: 2666,
      price: 400,
    },
  ]

  return (
    <div className="bg-base-200 pb-[4rem]">
      <Banner height="400px"/>
      <div className="wrapper">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(16rem,_1fr))] gap-x-4 gap-y-8 pt-[3rem] justify-items-center">
          {data.map((item, id) => {
            return (
              <ProductCard
                title={item.title}
                description={item.description}
                star={item.star}
                joined={item.joined}
                comment={item.comment}
                price={item.price}
                key={id}
              />
            )
          })}
        </div>
      </div>
    </div>
  )
}
