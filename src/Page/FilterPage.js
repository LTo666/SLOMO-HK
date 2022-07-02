import FilterCard from "../Component/FilterPage/FilterCard"
import { useState, createContext } from "react"
import Filter from "../Component/FilterPage/Filter"
import { Link } from "react-router-dom"
import Banner from "../Component/Banner/Banner"

export const FilterContext = createContext()

export default function FilterPage() {
  const data = [
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing cjioexzcgvads",
      cat: ["Man", "Spa"],
      location: ["Hong Kong", "Kowloon", "Mong Kok"],
      price: 0,
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing asdcxzgedsyg",
      cat: ["Woman", "Spa"],
      location: ["Hong Kong", "Hong Kong Island", "Tai Po"],
      price: "200",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing cvbrs gtydf",
      cat: ["Man", "Theme Park"],
      location: ["Hong Kong", "Hong Kong Island", "Tai Po"],
      price: "300",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing sdfgs dge r e",
      cat: ["Kid", "Theme Park"],
      location: ["Hong Kong", "Kowloon", "Tai Po"],
      price: "400",
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing sdfv sdger g dsfgsdgr ",
      cat: ["Woman", "Spa"],
      location: ["Hong Kong", "New Territories", "Tai Po"],
      price: 0,
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing sdfg esrg sdcv sdfgesr g",
      cat: ["Woman", "Restaurant"],
      location: ["Hong Kong", "Kowloon", "Tai Po"],
      price: "200",
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscingsdvc esdrv sdrgdscvsedrg",
      cat: ["Man", "Theme Park"],
      location: ["Hong Kong", "Island District", "Tai Po"],
      price: "300",
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscingsdcv dsfg sdrg 4e grtehrtd",
      cat: ["Kid", "Restaurant"],
      location: ["Hong Kong", "Hong Kong Island", "Tai Po"],
      price: "400",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing cjioexzcgvads",
      cat: ["Man", "Spa"],
      location: ["Hong Kong", "Kowloon", "Mong Kok"],
      price: 0,
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing asdcxzgedsyg",
      cat: ["Woman", "Spa"],
      location: ["Hong Kong", "Hong Kong Island", "Tai Po"],
      price: "200",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing cvbrs gtydf",
      cat: ["Man", "Theme Park"],
      location: ["Hong Kong", "Hong Kong Island", "Tai Po"],
      price: "300",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing sdfgs dge r e",
      cat: ["Kid", "Theme Park"],
      location: ["Hong Kong", "Kowloon", "Tai Po"],
      price: "400",
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing sdfv sdger g dsfgsdgr ",
      cat: ["Woman", "Spa"],
      location: ["Hong Kong", "New Territories", "Tai Po"],
      price: 0,
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing sdfg esrg sdcv sdfgesr g",
      cat: ["Woman", "Restaurant"],
      location: ["Hong Kong", "New Territories", "Tai Po"],
      price: "200",
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscingsdvc esdrv sdrgdscvsedrg",
      cat: ["Man", "Theme Park"],
      location: ["Hong Kong", "Island District", "Tai Po"],
      price: "300",
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscingsdcv dsfg sdrg 4e grtehrtd",
      cat: ["Kid", "Restaurant"],
      location: ["Hong Kong", "Island District", "Tai Po"],
      price: "400",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing cjioexzcgvads",
      cat: ["Man", "Spa"],
      location: ["Hong Kong", "Kowloon", "Mong Kok"],
      price: 0,
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing asdcxzgedsyg",
      cat: ["Woman", "Spa"],
      location: ["Hong Kong", "Hong Kong Island", "Tai Po"],
      price: "200",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing cvbrs gtydf",
      cat: ["Man", "Theme Park"],
      location: ["Hong Kong", "Hong Kong Island", "Tai Po"],
      price: "300",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing sdfgs dge r e",
      cat: ["Kid", "Theme Park"],
      location: ["Hong Kong", "Kowloon", "Tai Po"],
      price: "400",
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing sdfv sdger g dsfgsdgr ",
      cat: ["Woman", "Spa"],
      location: ["Hong Kong", "New Territories", "Tai Po"],
      price: 0,
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing sdfg esrg sdcv sdfgesr g",
      cat: ["Woman", "Restaurant"],
      location: ["Hong Kong", "New Territories", "Tai Po"],
      price: "200",
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscingsdvc esdrv sdrgdscvsedrg",
      cat: ["Man", "Theme Park"],
      location: ["Hong Kong", "Island District", "Tai Po"],
      price: "300",
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscingsdcv dsfg sdrg 4e grtehrtd",
      cat: ["Kid", "Restaurant"],
      location: ["Hong Kong", "Island District", "Tai Po"],
      price: "400",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing cjioexzcgvads",
      cat: ["Man", "Spa"],
      location: ["Hong Kong", "Kowloon", "Mong Kok"],
      price: 0,
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing asdcxzgedsyg",
      cat: ["Woman", "Spa"],
      location: ["Hong Kong", "Hong Kong Island", "Tai Po"],
      price: "200",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing cvbrs gtydf",
      cat: ["Man", "Theme Park"],
      location: ["Hong Kong", "Hong Kong Island", "Tai Po"],
      price: "300",
    },
    {
      title: "Lorem ipsum dolor sit amet, consectetur adipiscing sdfgs dge r e",
      cat: ["Kid", "Theme Park"],
      location: ["Hong Kong", "Kowloon", "Tai Po"],
      price: "400",
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing sdfv sdger g dsfgsdgr ",
      cat: ["Woman", "Spa"],
      location: ["Hong Kong", "New Territories", "Tai Po"],
      price: 0,
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing sdfg esrg sdcv sdfgesr g",
      cat: ["Woman", "Restaurant"],
      location: ["Hong Kong", "New Territories", "Tai Po"],
      price: "200",
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscingsdvc esdrv sdrgdscvsedrg",
      cat: ["Man", "Theme Park"],
      location: ["Hong Kong", "Island District", "Tai Po"],
      price: "300",
    },
    {
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscingsdcv dsfg sdrg 4e grtehrtd",
      cat: ["Kid", "Restaurant"],
      location: ["Hong Kong", "Island District", "Tai Po"],
      price: "400",
    },
  ]

  const [filtered, setFiltered] = useState(data)

  const [criteria, setCriteria] = useState([])

  const results = filtered.map((item, id) => {
    return (
      <FilterCard
        title={item.title}
        cat={item.cat}
        location={item.location[1]}
        price={item.price}
        key={id}
      />
    )
  })

  return (
    <FilterContext.Provider
      value={{ data, criteria, setCriteria, setFiltered }}
    >
      <div className="bg-base-200 pb-[4rem]">
        <Banner />
        <div className="wrapper">
          <div className="py-6 pl-2 text-md breadcrumbs">
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>Hong Kong</li>
            </ul>
          </div>

          <div className="flex flex-row justify-between w-full">
            <Filter />

            <section className="w-[75%]">
              <p className="text-xl p-4  bg-base-100 mb-4 rounded-[1rem]">
                <strong>{`${results.length}`}</strong> activities are found.
              </p>
              <div className="grid grid-cols-[repeat(auto-fit,_minmax(17rem,_1fr))] gap-x-4 gap-y-8">
                {results}
              </div>
            </section>
          </div>
        </div>
      </div>
    </FilterContext.Provider>
  )
}
