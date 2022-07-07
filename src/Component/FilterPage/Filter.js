import FilterCheckbox from "./FilterCheckbox"

export default function Filter() {
  const region = ["香港島", "九龍", "新界", "離島區"]

  const cat = [
    { name: "酒店", PATH_URL: "hotel" },
    { name: "家庭", PATH_URL: "family" },
    { name: "情侶", PATH_URL: "couple" },
    { name: "冒險", PATH_URL: "aventure" },
    { name: "住宿", PATH_URL: "staycation" },
  ]

  const regionCheckboxes = region.map((item, id) => {
    return <FilterCheckbox title={item} key={id} />
  })
  const catCheckboxes = cat.map((item, id) => {
    return <FilterCheckbox title={item.name} key={id} />
  })

  return (
    <div className="h-[75vh] w-[20%] sticky top-[7rem] p-[1.5rem] bg-base-100 rounded-[1rem] overflow-auto">
      <div>
        <p className="text-2xl">城市</p>


          <div
            tabIndex="0"
            className="collapse collapse-arrow rounded-box transition-all duration-300 ease-out"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title transition-all duration-300 ease-out">
              香港
            </div>
            <div className="collapse-content transition-all duration-300 ease-out">
              {regionCheckboxes}
            </div>
          </div>
        </div>

      <div>
        <p className="text-2xl">類別</p>

        <div className="p-[1rem]">{catCheckboxes}</div>
      </div>
    </div>
  )
}
