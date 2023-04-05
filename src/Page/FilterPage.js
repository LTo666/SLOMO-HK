import Filter from "../Component/FilterPage/Filter"
import { Link } from "react-router-dom"
import FilterResult from "../Component/FilterPage/FilterResult"
import OverlayDiv from "../Component/OverlayDiv"

export default function FilterPage() {
  return (
    <div className="bg-base-200 pb-[4rem]">
      <div className="w-full h-[20rem] relative">
        <img
          src="https://bit.ly/3ajzVtU"
          alt=""
          style={{
            width: "100%",
            height: `100%`,
            overflow: "hidden",
            objectFit: "cover",
            position: "absolute",
            filter: "blur(2px)"
          }}
        />
        <OverlayDiv opacity="0.3" />
        <div
          className="absolute text-white text-6xl top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]"
          style={{ textShadow: "2px 2px 8px rgba(0,0,0,0.7)" }}
        >
          香港，
          <div className="mt-8 text-3xl">一個東方及西方文化交匯的地方。</div>
        </div>
      </div>
      <div className="wrapper">
        <div className="py-6 pl-2 text-md breadcrumbs">
          <ul>
            <li className="text-primary">
              <Link to="/SLOMO-HK">首頁</Link>
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
