import { Navigate, Route, Routes } from "react-router-dom"
import { useSelector } from "react-redux"
import "./App.css"
import ScrollToTop from "./Component/ScrollToTop"
import LandingPage from "./Page/LandingPage"
import FilterPage from "./Page/FilterPage"
import CategoryPage from "./Page/CategoryPage"
import ProductDetailPage from "./Page/ProductDetailPage"
import UpperNavbar from "./Component/Navbar/UpperNavbar"
import LowerNavbar from "./Component/Navbar/LowerNavbar"
import ShoppingCartPage from "./Page/ShoppingCartPage"
import Footer from "./Component/Footer"
import RequireAuth from "./Component/RequireAuth"
import LoginPage from "./Page/LoginPage"
import BloggerListPage from "./Page/BloggerListPage"
import BlogUIPage from "./Page/BlogUIPage"
import ErrorPage from "./Page/ErrorPage"
import Cart from "./Component/ShoppingCartPage/Cart"
import FillAndPay from "./Component/ShoppingCartPage/FillAndPay"
import SubmitedOrder from "./Component/ShoppingCartPage/SubmitedOrder"
import BlogContent from "./Component/BlogUIPage/BlogContent"

function App() {
  const isLoggedIn = useSelector((state) => state.authStore.isLoggedIn)
  const shopData = useSelector((state) => state.cartStore.cartList)

  return (
    <div id="app">
      <UpperNavbar isLoggedIn={isLoggedIn} />
      <LowerNavbar />

      <ScrollToTop>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/filter" element={<FilterPage />} />
          <Route path="/category/:cat" element={<CategoryPage />} />
          <Route path="/cart" element={<ShoppingCartPage />}>
            <Route path="list" element={<Cart />} />
            <Route
              path="fillnpay"
              element={
                <RequireAuth redirectTo="/login">
                  <FillAndPay />
                </RequireAuth>
              }
            />
            <Route
              path="ordered"
              element={
                <RequireAuth redirectTo="/login">
                  <SubmitedOrder />
                </RequireAuth>
              }
            />
          </Route>
          <Route path="/product/:pid" element={<ProductDetailPage />} />
          <Route
            path="/login"
            element={
              isLoggedIn && shopData.length > 0 ? (
                <Navigate to="/cart/list" />
              ) : isLoggedIn && shopData.length === 0 ? (
                <Navigate to="/" />
              ) : (
                <LoginPage signup={false} />
              )
            }
          />
          <Route
            path="/signup"
            element={
              isLoggedIn && shopData.length > 0 ? (
                <Navigate to="/cart/list" />
              ) : isLoggedIn && shopData.length === 0 ? (
                <Navigate to="/" />
              ) : (
                <LoginPage signup={true} />
              )
            }
          />
          <Route path="/bloggerlist" element={<BloggerListPage />} />
          

          <Route path="/blogger/:bloggerid" element={<BlogUIPage />}>
            <Route path="blog/:blogid" element={<BlogContent />} />
          </Route>

          <Route path="/error" element={<ErrorPage />} />
          <Route path="*" element={<ErrorPage />} />
    
        </Routes>
      </ScrollToTop>

      <Footer />
    </div>
  )
}

export default App
