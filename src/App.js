import { Link, Route, Routes } from "react-router-dom"
import "./App.css"
import BlogResultPage from "./Page/BlogResultPage"
import LandingPage from "./Page/LangingPage"
import FilterPage from "./Page/FilterPage"
import TourPage from "./Page/TourPage"

function App() {
  const navStyle = {
    margin: "4rem",
    textDecoration: "none",
    fontSize: "2rem",
  }
  return (
    <div>
      <header>
        <nav style={{ backgroundColor: "black" }}>
          <Link style={navStyle} to="/">
            Home
          </Link>
          <Link style={navStyle} to="/filter">
            Search Bar
          </Link>
          <Link style={navStyle} to="/tour">
            Tours
          </Link>
          <Link style={navStyle} to="/blog">
            Blogs
          </Link>
          <span style={{ color: "white" }}>Shopping Cart</span>
          <span style={{ color: "white" }}>Login / Sign Up</span>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/tour" element={<TourPage />} />
        <Route path="/blog" element={<BlogResultPage />} />
        <Route path="/filter" element={<FilterPage />} />
      </Routes>

      <footer style={{ backgroundColor: "black", color: "white" }}>
        This is an footer
      </footer>
    </div>
  )
}

export default App
