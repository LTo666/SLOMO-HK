import { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { changeSearchCriteria } from "../../../Redux/searchSlice"

export default function HeroSearchBar() {
  const dispatch = useDispatch()

  const [searchInput, setSearchInput] = useState("")
  const [searchInputBg, setSearchInputBg] = useState(
    "border-base-100"
  )

  const submitCriteria = () => {
    dispatch(changeSearchCriteria(searchInput))
    setSearchInput("")
  }

  return (
    <div>
      <div
        className={`input-group rounded-[1rem] hover:bg-base-100 border-2 hover:border-primary bg-base-100 ${searchInputBg}`}
      >
        <input
          type="text"
          placeholder="搜尋休閒活動／目的地"
          className="px-6 py-0 w-[40rem] h-[4rem] caret-primary text-xl text-primary-content"
          style={{
            border: "none",
            outline: "none",
            borderTopLeftRadius: "1rem",
            borderBottomLeftRadius: "1rem",
            backgroundColor: "rgba(0, 0, 0, 0)",
          }}
          value={searchInput}
          onChange={(e) => {
            setSearchInput(e.target.value)
          }}
          onFocus={() => setSearchInputBg("border-primary")}
          onBlur={() => setSearchInputBg("border-base-100")}
        />
        <Link to="/filter">
          <button
            className="btn btn-primary pl-3 hover:btn-primary hover:text-[white] h-[4rem] w-[4rem]"
            style={{
              border: "none",
              borderTopRightRadius: "0.9rem",
              borderBottomRightRadius: "0.9rem",
            }}
            onClick={() => submitCriteria()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-[2rem] w-[2rem]"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </Link>
        {/* <span className="bg-base-100">{searchInput}</span> */}
      </div>
    </div>
  )
}
