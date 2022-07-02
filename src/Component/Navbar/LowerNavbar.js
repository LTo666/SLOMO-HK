import { Link, useLocation } from "react-router-dom"
import NavbarCatBtn from "./NavbarCatBtn"

export default function LowerNavbar() {
  const location = useLocation()
  const fixedClass = "text-lg bg-base-100"
  const switchSticky =
    location.pathname === "/"
      ? `fixed sticky top-[5rem] z-20 ${fixedClass}`
      : fixedClass

  return (
    <nav
      className={switchSticky}
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
  )
}
