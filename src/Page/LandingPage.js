import React from "react"
import TourCard from "../Component/TourCard"
import Map from "../Component/Map"
import BloggerCatCard from "../Component/LandingPage/BloggerCatCard"

export default function LandingPage() {
  const content = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      cat: ["Shoes", "Sporty"],
      location: "HK Tsim Sha Tsui",
      price: "0",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      cat: ["Woman", "Casual"],
      location: "HK Central",
      price: "200",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      cat: ["Man", "Sporty"],
      location: "HK Mong Kok",
      price: "300",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      cat: ["Kid", "Playful"],
      location: "HK Tsuen Wan",
      price: "400",
    },
  ]

  return (
    <div>
      <Map />

      <div className="wrapper">

        <div>
          <p className="py-6 text-[2.5rem]">Blogger Choice</p>
          <div className="grid grid-cols-2 gap-6" >
            <BloggerCatCard isVdo={false}/>
            <BloggerCatCard isVdo={true}/>
          </div>
        </div>

        <p>This is a demostration of cards</p>
        <div className="grid grid-cols-4 gap-6">
          {content.map((item, id) => {
            return (
              <TourCard
                title={item.title}
                cat={item.cat}
                location={item.location}
                price={item.price}
                key={id}
              ></TourCard>
            )
          })}
        </div>

      </div>
    </div>
  )
}
