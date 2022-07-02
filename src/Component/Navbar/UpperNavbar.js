import { Link } from "react-router-dom"
import NavbarBtn from "./NavbarBtn"

export default function UpperNavbar() {
  return (
    <nav
      className="fixed sticky top-0 z-50 text-xl py-[1rem] bg-base-100"
      style={{ borderBottom: "1px solid lightgrey" }}
    >
      <div className="wrapper flex justify-between">
        <Link to="/">
          <NavbarBtn ctn="LOGO/HOME" />
        </Link>
        <Link to="/filter">Search Bar</Link>

        <div className="flex">
          <NavbarBtn logo="cart" />
          <NavbarBtn ctn="Login/SignUp" />
        </div>
      </div>
    </nav>
  )
}
