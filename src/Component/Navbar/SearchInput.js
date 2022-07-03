import { useState } from "react"
import { Link } from "react-router-dom"
import { useDispatch } from "react-redux"
import { changeSearchCriteria } from "../../Redux/searchSlice"

export default function SearchInput() {
const dispatch = useDispatch()

  const [searchInput, setSearchInput] = useState("")
  const [searchInputBg, setSearchInputBg] = useState("bg-base-200 border-base-100")

  const submitCriteria = () => {
    dispatch(changeSearchCriteria(searchInput))
    setSearchInput("")
  }

  return (
    <div>
      <div>
        <div
          className={`input-group rounded-[100rem] hover:bg-base-100 border-2 hover:border-primary ${searchInputBg}`}

        >
          <input
            type="text"
            placeholder="Search for the activities"
            className="px-6 py-0 w-[16rem] h-[46px] caret-primary"
            style={{
              border: "none",
              outline: "none",
              borderTopLeftRadius: "10rem",
              borderBottomLeftRadius: "10rem",
              backgroundColor: "rgba(0, 0, 0, 0)",

            }}
            value={searchInput}
            onChange={(e) => {
              setSearchInput(e.target.value)
            }}
            onFocus={() => setSearchInputBg("bg-base-100 border-primary")}
            onBlur={() => setSearchInputBg("bg-base-200 border-base-100")}
          />
          <Link to="/filter">
            <button
              className="btn btn-ghost pl-3 h-[46px] hover:btn-primary hover:text-[white]"
              style={{
                borderTopRightRadius: "10rem",
                borderBottomRightRadius: "10rem",
              }}
              onClick={() => submitCriteria() }
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
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
    </div>
  )
}
