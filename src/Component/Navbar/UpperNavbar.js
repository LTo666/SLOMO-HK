import { Link } from "react-router-dom"
import NavbarBtn from "./NavbarBtn"
import SearchInput from "./SearchInput"

export default function UpperNavbar() {
  return (
    <nav
      className="fixed sticky top-0 z-50 text-xl py-[1rem] bg-base-100"
      style={{ borderBottom: "1px solid lightgrey" }}
    >
      <div className="wrapper flex justify-between">
        <div className="flex">
          <Link to="/">
          <NavbarBtn ctn="LOGO/HOME" />
        </Link>
        <SearchInput  />
        </div>

        <div className="flex">
          <NavbarBtn logo="cart" />
          <NavbarBtn ctn="SignUp" />
          <NavbarBtn ctn="Login" />
        </div>
      </div>
    </nav>
  )
}
