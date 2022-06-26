import { Link, Route, Routes } from "react-router-dom"
import "./App.css"
import BlogResultPage from "./Page/BlogResultPage"
import LandingPage from "./Page/LandingPage"
import FilterPage from "./Page/FilterPage"
import TourPage from "./Page/TourPage"
import NavbarCatBtn from "./Component/Navbar/NavbarCatBtn"
import NavbarBtn from "./Component/Navbar/NavbarBtn"

function App() {
  return (
    <div>
      <header className="fixed sticky top-0 z-50 bg-base-100">
        <nav
          className="text-xl py-[1rem] px-[6rem] flex justify-between"
          style={{ borderBottom: "1px solid lightgrey" }}
        >
          <Link to="/">
            <NavbarBtn ctn="LOGO/HOME" />
          </Link>
          {/* <Link to="/filter">Search Bar</Link> */}

          <div className="flex">
            <NavbarBtn ctn="Cart" />
            <NavbarBtn ctn="SignUp / Login" />
          </div>
        </nav>
        <nav
          className="flex justify-evenly text-lg"
          style={{ borderBottom: "1px solid lightgrey" }}
        >
          <Link to="/tour">
            <NavbarCatBtn cat={"Tour"} />
          </Link>
          <Link to="/blog">
            <NavbarCatBtn cat={"Blog"} />
          </Link>
          <NavbarCatBtn cat={"Dummmy"} />
          <NavbarCatBtn cat={"Dummmy"} />
          <NavbarCatBtn cat={"Dummmy"} />
          <NavbarCatBtn cat={"Dummmy"} />
          <NavbarCatBtn cat={"Dummmy"} />
          <NavbarCatBtn cat={"Dummmy"} />
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tour" element={<TourPage />} />
        <Route path="/blog" element={<BlogResultPage />} />
        <Route path="/filter" element={<FilterPage />} />
      </Routes>

      <footer style={{ backgroundColor: "black", color: "white", textAlign: "center" }}>
        This is an footer
      </footer>
    </div>
  )
}

export default App
