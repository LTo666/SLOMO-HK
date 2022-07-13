import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  isLoggedIn: false || localStorage.getItem("SLOMO_TOKEN") != null,
  userInfo: {},
}

export const authSlice = createSlice({
  name: "auth",
  initialState: initialState,
  reducers: {
    login: (state) => {
      state.isLoggedIn = true
    },

    logout: (state) => {
      state.isLoggedIn = false
    },
    storeUserInfo: (state ,action) => {
      state.userInfo = action.payload
    }
  },
})

export const { login, logout, storeUserInfo } = authSlice.actions

export const loginThunk = (email, password) => async dispatch => {
  const data = { email, password }

  fetch("https://ca.xccelerate.co/auth/login", {
    method: "POST",
    crossDomain: true,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("SLOMO_TOKEN", data.userInfo.token)
      dispatch(login())
      dispatch(storeUserInfo({username: data.userInfo.user.username, email: data.userInfo.user.email,}))
      console.log('Successful - LogIn: ', data.userInfo.user)
    })
}

export const logoutThunk = () => async dispatch => {
  console.log("logout")
  localStorage.removeItem("SLOMO_TOKEN")
  dispatch(storeUserInfo({}))
  dispatch(logout())
}

export const signupThunk = (email, password, username) => async dispatch => {
  const data = { email, password, username }

  fetch('https://ca.xccelerate.co/auth/signup', {
    method: "POST",
    crossDomain: true,
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(res => res.json()).then(data => {
    console.log('Successful - SignUp: ', data)
  })
}

export default authSlice.reducer
