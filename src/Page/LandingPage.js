import React from "react"
import TourCard from "../Component/TourCard"
import Map from "../Component/LandingPage/Map"
import BloggerCatCard from "../Component/LandingPage/BloggerCatCard"
import CatCard from "../Component/LandingPage/CatCard"

export default function LandingPage() {

  return (
    <div>
      <Map />

      <div className="wrapper">
        <div>
          <p className="py-6 text-[2.5rem]">Categories</p>
          <div className="grid grid-cols-4 gap-6">
            <CatCard title={"Spa"}/>
            <CatCard title={"Theme Park"}/>
            <CatCard title={"Restaurant"}/>
            <CatCard title={"More"}/>
          </div>
        </div>

        <div>
          <p className="py-6 text-[2.5rem]">Blogger Choice</p>
          <div className="grid grid-cols-2 gap-6">
            <BloggerCatCard isVdo={false} />
            <BloggerCatCard isVdo={true} />
          </div>
        </div>

      </div>
    </div>
  )
}
