import FilterCard from "./FilterCard"
import { useSelector } from "react-redux"

export default function FilterResult() {
  const searchCriteria = useSelector(
    (state) => state.searchStore.searchCriteria
  )
  const filterCriteria = useSelector(
    (state) => state.searchStore.filterCriteria
  )

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

  const result = () => {
    let filtered = data
    if (searchCriteria.length === 0) {
      filtered = filtered
    } else {
      filtered = filtered.filter((item) => {
        return (
          item.cat.includes(searchCriteria) ||
          item.location.includes(searchCriteria) ||
          item.title.includes(searchCriteria)
        )
      })
    }
    if (filterCriteria.length === 0) {
      filtered = filtered
    } else {
      for (let i = 0; i < filterCriteria.length; i++) {
        filtered = filtered.filter((item) => {
          return (
            item.cat.includes(filterCriteria[i]) ||
            item.location.includes(filterCriteria[i]) ||
            item.title.includes(filterCriteria[i])
          )
        })
      }
    }
    return filtered
  }

  const showResult = result().map((item, id) => {
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
    <section className="w-[75%]">
      <div className="text-xl py-4 px-6 bg-base-100 mb-4 rounded-[1rem]">
        <p><strong>Searching Result "{searchCriteria}"</strong></p>
        <strong>{`${showResult.length}`}</strong> activities with matching criteria are found.
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(17rem,_1fr))] gap-x-4 gap-y-8">
        {showResult}
      </div>
    </section>
  )
}
