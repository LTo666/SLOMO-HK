import Filter from "../Component/FilterPage/Filter"
import { Link } from "react-router-dom"
import Banner from "../Component/Banner/Banner"
import FilterResult from "../Component/FilterPage/FilterResult"

export default function FilterPage() {
  return (
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

          <FilterResult />
        </div>
      </div>
    </div>
  )
}
