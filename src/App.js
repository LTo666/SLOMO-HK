import { Link, Route, Routes } from "react-router-dom"
import "./App.css"
import BlogPage from "./Page/BlogPage"
import LandingPage from "./Page/LangingPage"
import SearchPage from "./Page/SearchPage"
import TourPage from "./Page/TourPage"

function App() {
  const navStyle = {
    margin: '4rem',
    textDecoration: 'none',
    fontSize: '2rem'

  }
  return (
    <div>
      <nav style={{backgroundColor: "black"}} >
        <Link style={navStyle} to="/" >Home</Link>
        <Link style={navStyle} to="/search" >Search Bar</Link>
        <Link style={navStyle} to="/tour" >Tours</Link>
        <Link style={navStyle} to="/blog" >Blogs</Link>
        <span style={{color: "white"}} >Shopping Cart</span>
        <span style={{color: "white"}} >Login / Sign Up</span>
      </nav>

      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/tour' element={<TourPage />} />
        <Route path='/blog' element={<BlogPage />} />
        <Route path='/search' element={<SearchPage />} />
      </Routes>

      <footer style={{backgroundColor: "black", color: "white"}}>
        This is an footer
      </footer>

    </div>
  )
}

export default App
