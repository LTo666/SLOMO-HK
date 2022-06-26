import React from "react"
import TourCard from "../Component/TourCard"
import Map from "../Component/Navbar/Map"

export default function LandingPage() {
  const content = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      cat: ["Shoes", "Sporty"],
      location: "HK Tsim Sha Tsui",
      price: "0"
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      cat: ["Woman", "Casual"],
      location: "HK Central",
      price: "200"
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      cat: ["Man", "Sporty"],
      location: "HK Mong Kok",
      price: "300"
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing",
      cat: ["Kid", "Playful"],
      location: "HK Tsuen Wan",
      price: "400"
    },
  ]

  return (
    <div>
      <Map />
      <div className="grid grid-cols-4">
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
  )
}
