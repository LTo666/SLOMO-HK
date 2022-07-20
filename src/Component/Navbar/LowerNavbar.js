import { Link, useLocation } from "react-router-dom"
import NavbarCatBtn from "./NavbarCatBtn"

export default function LowerNavbar() {
  const location = useLocation()
  const fixedClass = "text-lg bg-base-100"
  const switchSticky =
    location.pathname === "/"
      ? `fixed sticky top-[5.3rem] z-20 ${fixedClass}`
      : fixedClass

  return (
    <nav
      className={switchSticky}
      style={{ borderBottom: "1px solid lightgrey" }}
    >
      <div className="wrapper flex">

        <Link to="/filter">
          <NavbarCatBtn cat={"漫遊香港"} />
        </Link>

        <Link to="/category/family">
          <NavbarCatBtn cat={"家庭"} />
        </Link>

        <Link to="/category/couple">
          <NavbarCatBtn cat={"情侶"} />
        </Link>

        <Link to="/category/adventure">
          <NavbarCatBtn cat={"冒險"} />
        </Link>

        <Link to="/category/hotel">
          <NavbarCatBtn cat={"酒店住宿"} />
        </Link>

        <Link to="/category/restaurant">
          <NavbarCatBtn cat={"餐廳"} />
        </Link>

        <NavbarCatBtn cat={"Spa及按摩"} />

        <NavbarCatBtn cat={"精選活動"} />

        <NavbarCatBtn cat={"交通"} />

        <Link to="/bloggerlist">
          <NavbarCatBtn cat={"冒險家"} />
        </Link>

        <NavbarCatBtn cat={"熱門網誌"} />

      </div>
    </nav>
  )
}
