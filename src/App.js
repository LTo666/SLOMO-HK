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
          className="text-xl py-[1rem]"
          style={{ borderBottom: "1px solid lightgrey" }}
        >
          <div className="wrapper flex justify-between">
            <Link to="/">
              <NavbarBtn ctn="LOGO/HOME" />
            </Link>
            {/* <Link to="/filter">Search Bar</Link> */}

            <div className="flex">
              <NavbarBtn logo="cart" />
              <NavbarBtn ctn="Login/SignUp" />
            </div>
          </div>
        </nav>
        <nav
          className="text-lg"
          style={{ borderBottom: "1px solid lightgrey" }}
        >
          <div className="wrapper flex justify-around">
            <Link to="/tour">
              <NavbarCatBtn cat={"Tour"} />
            </Link>
            <Link to="/blog">
              <NavbarCatBtn cat={"Blog"} />
            </Link>
            <Link to="/filter">
              <NavbarCatBtn cat={"Filter"} />
            </Link>
            <NavbarCatBtn cat={"Dummmy"} />
            <NavbarCatBtn cat={"Dummmy"} />
            <NavbarCatBtn cat={"Dummmy"} />
            <NavbarCatBtn cat={"Dummmy"} />
            <NavbarCatBtn cat={"Dummmy"} />
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tour" element={<TourPage />} />
        <Route path="/blog" element={<BlogResultPage />} />
        <Route path="/filter" element={<FilterPage />} />
      </Routes>

      <footer
        style={{
          backgroundColor: "black",
          color: "white",
          textAlign: "center",
        }}
      >
        This is an footer
      </footer>
    </div>
  )
}

export default App
