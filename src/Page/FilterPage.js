import React from "react"
import Filter from "../Component/FilterPage/Filter"
import Map from "../Component/LandingPage/Map"
import { Form, Checkbox } from "react-daisyui"
import TourCard from "../Component/TourCard"

export default function FilterPage() {
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
        <h6 className="py-4">This is an page for filtering result</h6>

        <div className="flex flex-row justify-between w-full">
          <section
            className="h-[75vh] w-[20%] sticky top-[10rem] p-[1rem]"
            style={{ border: "2px solid black" }}
          >
            <div>
              <p className="text-2xl">Location</p>

              <div>
                <div
                  tabindex="0"
                  className="collapse collapse-arrow bg-base-100 rounded-box transition-all duration-300 ease-out"
                >
                  <input type="checkbox" className="peer" />
                  <div className="collapse-title transition-all duration-300 ease-out">
                    Hong Kong
                  </div>
                  <div className="collapse-content transition-all duration-300 ease-out">
                    <Form className="rounded-lg px-2 hover:bg-base-300">
                      <Form.Label className="cursor-pointer" title="Mong Kok">
                        <Checkbox />
                      </Form.Label>
                    </Form>
                    <Form className="rounded-lg px-2 hover:bg-base-300">
                      <Form.Label
                        className="cursor-pointer"
                        title="Tsim Sha Tsui"
                      >
                        <Checkbox />
                      </Form.Label>
                    </Form>
                    <Form className="rounded-lg px-2 hover:bg-base-300">
                      <Form.Label
                        className="cursor-pointer"
                        title="Lantau Island"
                      >
                        <Checkbox />
                      </Form.Label>
                    </Form>
                    <Form className="rounded-lg px-2 hover:bg-base-300">
                      <Form.Label
                        className="cursor-pointer"
                        title="North Point"
                      >
                        <Checkbox />
                      </Form.Label>
                    </Form>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <p className="text-2xl">Categories</p>

              <div className="p-[1rem]">
                <Form className="rounded-lg px-2 hover:bg-base-300">
                  <Form.Label className="cursor-pointer" title="Spa">
                    <Checkbox />
                  </Form.Label>
                </Form>
                <Form className="rounded-lg px-2 hover:bg-base-300">
                  <Form.Label className="cursor-pointer" title="Theme Park">
                    <Checkbox />
                  </Form.Label>
                </Form>
                <Form className="rounded-lg px-2 hover:bg-base-300">
                  <Form.Label className="cursor-pointer" title="Restaurant">
                    <Checkbox />
                  </Form.Label>
                </Form>
                <Form className="rounded-lg px-2 hover:bg-base-300">
                  <Form.Label className="cursor-pointer" title="More">
                    <Checkbox />
                  </Form.Label>
                </Form>
              </div>
            </div>
          </section>

          <section
            className="h-[100rem] w-[75%]"
            style={{ border: "2px solid black" }}
          >
            <p className="text-xl p-4"><strong>{`${content.length}`}</strong> activities are found.</p>
            <div className="grid grid-cols-3 gap-6">
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
          </section>
        </div>
      </div>
    </div>
  )
}
