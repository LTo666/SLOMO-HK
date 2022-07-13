import { useSelector } from "react-redux"
import { Navigate } from "react-router-dom"

export default function RequireAuth(props) {
  const isLoggedIn = useSelector(state => state.authStore.isLoggedIn)

  return (
    isLoggedIn ? props.children : <Navigate to={props.redirectTo} />
  )
}
