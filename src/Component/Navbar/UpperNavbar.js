import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import { logoutThunk } from "../../Redux/authSlice"
import CartBtnList from "./CartBtnList"
import LogoHomeBtn from "./LogoHomeBtn"
import NavbarBtn from "./NavbarBtn"
import SearchInput from "./SearchInput"
import ShoppingCartBtn from "./ShoppingCartBtn"

export default function UpperNavbar({ isLoggedIn }) {
  const userInfo = useSelector((state) => state.authStore.userInfo)
  const dispatch = useDispatch()

  const surnameFirstLetter =
    userInfo.username && userInfo.username[0].toUpperCase()

  return (
    <nav
      className="fixed sticky top-0 z-50 text-xl py-[1rem] bg-base-100"
      style={{ borderBottom: "1px solid lightgrey" }}
    >
      <div className="wrapper flex justify-between">
        <div className="flex items-center space-x-4">
          <Link to="/">
            <LogoHomeBtn height="2.25rem" />
          </Link>
          <SearchInput />
        </div>

        <div className="flex items-center gap-x-2">
          <ul className="menu menu-horizontal p-0">
            <li className="rounded-full p-0">
              <ShoppingCartBtn />

              <ul>
                <li
                  className="translate-x-[-25rem] translate-y-[0.5rem] rounded-[0.5rem]"
                  style={{
                    boxShadow:
                      "0 1px 4px 0 rgb(0 0 0 / 0.2), 0 1px 16px -1px rgb(0 0 0 / 0.3)",
                  }}
                >
                  <CartBtnList />
                </li>
              </ul>
            </li>
          </ul>

          {isLoggedIn ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex="0"
                className="btn btn-ghost avatar online placeholder rounded-full w-[3rem] h-[3rem] cursor-pointer hover:ring hover:ring-primary p-0"
              >
                <div className="bg-neutral-focus text-neutral-content rounded-full w-full ">
                  <span className="text-xl">{surnameFirstLetter}</span>
                </div>
              </label>
              <ul
                tabIndex="0"
                className="menu menu-compact dropdown-content mt-3 p-2 bg-base-100 rounded-box w-[10rem] gap-y-2"
                style={{
                  boxShadow:
                    "0 1px 4px 0 rgb(0 0 0 / 0.2), 0 1px 16px -1px rgb(0 0 0 / 0.3)",
                }}
              >
                <li className="hover:bg-base-100 rounded-full">
                  <div className="w-full btn btn-ghost text-center">
                    我的訂單
                  </div>
                </li>
                <li className="hover:bg-base-100 rounded-full">
                  <div className="w-full btn btn-ghost text-center">
                  設定
                  </div>
                </li>
                <li className="hover:bg-base-100 rounded-full">
                  <div
                    className="w-full btn btn-primary text-center text-primary-content"
                    onClick={() => dispatch(logoutThunk())}
                  >
                    登出
                  </div>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex items-center gap-x-2">
              <Link to="/signup">
                <NavbarBtn ctn="註冊" />
              </Link>
              <Link to="/login">
                <NavbarBtn ctn="登入" />
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  )
}
