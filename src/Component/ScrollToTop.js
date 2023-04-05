import { useEffect } from "react"
import { useLocation } from "react-router"

const ScrollToTop = (props) => {
  const location = useLocation()

  useEffect(() => {
    if (location.pathname.split("/SLOMO-HK").includes("blog")) {
      window.scrollTo({ top: "400", left: 0, behavior: "smooth" })
    }else {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" })
    }
  }, [location])

  return <>{props.children}</>
}

export default ScrollToTop
