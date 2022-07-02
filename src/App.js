import { Link, Route, Routes } from "react-router-dom"
import "./App.css"
import BlogResultPage from "./Page/BlogResultPage"
import LandingPage from "./Page/LandingPage"
import FilterPage from "./Page/FilterPage"
import ProductPage from "./Page/ProductPage"
import NavbarCatBtn from "./Component/Navbar/NavbarCatBtn"
import NavbarBtn from "./Component/Navbar/NavbarBtn"
import Carousel from "./Component/Carousel/Carousel"

function App() {
  const slides = [
    "https://picsum.photos/id/1032/1440/600",
    "https://picsum.photos/id/1033/1440/600",
    "https://picsum.photos/id/1037/1440/600",
    "https://picsum.photos/id/1035/1440/600",
    "https://picsum.photos/id/1036/1440/600",
  ]
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
            <Link to="/product">
              <NavbarCatBtn cat={"Product"} />
            </Link>
            <Link to="/blog">
              <NavbarCatBtn cat={"Blog"} />
            </Link>
            <Link to="/filter">
              <NavbarCatBtn cat={"Filter"} />
            </Link>
            <Link to="/carousel">
              <NavbarCatBtn cat={"Carousel"} />
            </Link>
            <NavbarCatBtn cat={"Dummmy"} />
            <NavbarCatBtn cat={"Dummmy"} />
            <NavbarCatBtn cat={"Dummmy"} />
            <NavbarCatBtn cat={"Dummmy"} />
          </div>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/blog" element={<BlogResultPage />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route path="/carousel" element={<Carousel slides={slides} controls indicators height="500px" />} />
        <Route path="*" element={<p>404 not found</p>} />
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
