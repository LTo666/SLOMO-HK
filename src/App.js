import { Link, Route, Routes } from "react-router-dom"
import "./App.css"
import BlogResultPage from "./Page/BlogResultPage"
import LandingPage from "./Page/LandingPage"
import FilterPage from "./Page/FilterPage"
import ProductPage from "./Page/ProductPage"
import Carousel from "./Component/Carousel/Carousel"
import UpperNavbar from "./Component/Navbar/UpperNavbar"
import LowerNavbar from "./Component/Navbar/LowerNavbar"

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
      <UpperNavbar />
      <LowerNavbar />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/blog" element={<BlogResultPage />} />
        <Route path="/filter" element={<FilterPage />} />
        <Route
          path="/carousel"
          element={
            <Carousel slides={slides} controls indicators height="500px" />
          }
        />
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
