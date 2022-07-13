import FilterCard from "./FilterCard"
import { useSelector } from "react-redux"
import PRODUCT_DATA from "../../Data/PRODUCT_DATA.json"

export default function FilterResult() {
  const searchCriteria = useSelector(
    (state) => state.searchStore.searchCriteria
  )
  const filterCriteria = useSelector(
    (state) => state.searchStore.filterCriteria
  )

  const result = () => {
    let filtered = PRODUCT_DATA
    if (searchCriteria.length === 0) {
      filtered = filtered
    } else {
      filtered = filtered.filter((item) => {
        return (
          item.category.includes(searchCriteria) ||
          item.location.includes(searchCriteria) ||
          item.name.includes(searchCriteria)
        )
      })
    }
    if (filterCriteria.length === 0) {
      filtered = filtered
    } else {
      for (let i = 0; i < filterCriteria.length; i++) {
        filtered = filtered.filter((item) => {
          return (
            item.category.includes(filterCriteria[i]) ||
            item.location.includes(filterCriteria[i]) ||
            item.name.includes(filterCriteria[i])
          )
        })
      }
    }
    return filtered
  }

  const showResult = result().map((item, id) => {
    return (
        <FilterCard
          title={item.name}
          cat={item.category}
          location={item.location[1]}
          price={item.price}
          img={item.photo_links_1}
          pid={item.pid}
          key={id}
        />
    )
  })

  return (
    <section className="w-[75%]">
      <div className="text-lg py-4 px-6 bg-base-100 mb-4 rounded-[1rem]">
        <div className="text-3xl pb-2">
          <strong>
            {searchCriteria.length === 0 ? (
              "所有活動"
            ) : (
              <p>
                搜尋結果 “<span className="text-primary">{searchCriteria}</span>
                ”
              </p>
            )}
          </strong>
        </div>
        <strong className="text-3xl">{`${showResult.length}`}</strong>{" "}
        個相關的活動被篩選
      </div>
      <div className="grid grid-cols-[repeat(auto-fit,_minmax(17rem,_1fr))] gap-x-4 gap-y-8">
        {showResult}
      </div>
    </section>
  )
}
