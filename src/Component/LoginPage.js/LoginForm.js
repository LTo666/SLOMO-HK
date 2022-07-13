import { useState } from "react"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { loginThunk, signupThunk } from "../../Redux/authSlice"
import LoginInput from "./LoginInput"
import ThirdPartyLogin from "./ThirdPartyLogin"

export default function LoginForm({ signup }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [username, setUsername] = useState("")
  const dispatch = useDispatch()

  const signupFunc = () => {
    console.log("signup redux thunk")
    dispatch(signupThunk(email, password, username))
  }

  const loginFunc = () => {
    console.log("loginin redux thunk")
    dispatch(loginThunk(email, password))
  }

  const currentPurpose = signup ? "註冊" : "登入"

  return (
    <div className="w-[30rem] h-full bg-base-100 rounded-[2rem] overflow-hidden">
      <div className="px-[3rem] py-[3rem]">
        <div className="text-4xl">{currentPurpose}</div>
        <div className="text-[gray] pt-4 font-light">
          {signup
            ? "如以已登記的電話號碼或第三方帳戶登記，將自動登入你的SloMo帳戶"
            : "如以未登記的電話號碼或第三方帳戶登入，將自動為你建立一個新SloMo帳戶"}
        </div>

        <div className="flex justify-around pt-6">
          <ThirdPartyLogin acc="Facebook" />
          <ThirdPartyLogin acc="Google" />
          <ThirdPartyLogin acc="Apple" />
        </div>

        <div className="divider text-[lightgray] font-light my-8">
          或快速{currentPurpose}
        </div>
        <div className="flex flex-col">
          {signup && (
            <LoginInput
              placeholder="姓名"
              onChangeFunc={setUsername}
              value={username}
            />
          )}

          <LoginInput
            placeholder="電郵地址"
            onChangeFunc={setEmail}
            value={email}
          />

          <LoginInput
            placeholder="密碼"
            onChangeFunc={setPassword}
            value={password}
          />

          <div
            className="btn btn-primary cursor-pointer w-full rounded-[1rem]"
            onClick={() => (signup ? signupFunc() : loginFunc())}
          >
            {currentPurpose}
          </div>
        </div>
      </div>
      <div className="h-[5rem] bg-[#000000] px-[3rem] flex justify-between items-center text-white">
        <div className="text-sm">
          {signup ? "已有Klook帳號？" : "還沒有帳號？現在註冊！"}
        </div>
        {signup ? (
          <Link to="/login">
            <div className="btn btn-ghost">登入</div>
          </Link>
        ) : (
          <Link to="/signup">
            <div className="btn btn-ghost">註冊</div>
          </Link>
        )}
      </div>
    </div>
  )
}
