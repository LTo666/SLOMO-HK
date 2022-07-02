import FilterCheckbox from "./FilterCheckbox"

export default function Filter() {
  const region = ["Hong Kong Island", "Kowloon", "New Territories", "Island District"]
  const cat = ["Spa", "Theme Park", "Restaurant", "More"]

  

  const regionCheckboxes = region.map((item, id) => {
    return <FilterCheckbox title={item} key={id} />
  })
  const catCheckboxes = cat.map((item, id) => {
    return <FilterCheckbox title={item} key={id} />
  })

  return (
    <div
      className="h-[75vh] w-[20%] sticky top-[10rem] p-[1rem] bg-base-100 rounded-[1rem]"
    >
      <div>
        <p className="text-2xl">Location</p>

        <div>
          <div
            tabIndex="0"
            className="collapse collapse-arrow rounded-box transition-all duration-300 ease-out"
          >
            <input type="checkbox" className="peer" />
            <div className="collapse-title transition-all duration-300 ease-out">
              Hong Kong
            </div>
            <div className="collapse-content transition-all duration-300 ease-out">
              {regionCheckboxes}
            </div>
          </div>
        </div>
      </div>

      <div>
        <p className="text-2xl">Categories</p>

        <div className="p-[1rem]">
          {catCheckboxes}
        </div>
      </div>
    </div>
  )
}
