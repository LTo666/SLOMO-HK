import Filter from "../Component/FilterPage/Filter"
import { Link } from "react-router-dom"
import Banner from "../Component/Banner/Banner"
import FilterResult from "../Component/FilterPage/FilterResult"

export default function FilterPage() {
  return (
    <div className="bg-base-200 pb-[4rem]">
      <Banner src="https://bit.ly/3ajzVtU" height={"20rem"} />
      <div className="wrapper">
        <div className="py-6 pl-2 text-md breadcrumbs">
          <ul>
            <li className="text-primary">
              <Link to="/">首頁</Link>
            </li>
            <li>香港</li>
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
