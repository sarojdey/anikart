import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { fetchDataFromApi } from "./utils/api";
import { useSelector, useDispatch } from "react-redux";
import { getCategories, getProducts } from "./store/homeSlice";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Categories from "./pages/categories/Categories";
import Wishlist from "./pages/wishlist/Wishlist";
import SearchResult from "./pages/searchResults/SearchResults";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import User from "./pages/user/User";
import ProductDetails from "./pages/productDetails/ProductDetails";

function App() {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.home);

  useEffect(() => {
    // fetchCategories();
    // fetchProducts();
  }, []);

  // const fetchCategories = () => {
  //   fetchDataFromApi("/api/categories?populate=*").then((res) => {
  //     console.log(res);
  //     dispatch(getCategories(res));
  //   });
  // };

  // const fetchProducts = () => {
  //   fetchDataFromApi("/products").then((res) => {
  //     dispatch(getProducts(res));
  //   });
  // };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/categories/:type" element={<Categories />}></Route>
        <Route path="/wishlist" element={<Wishlist />}></Route>
        <Route path="/search/:query" element={<SearchResult />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/product/:id" element={<ProductDetails />}></Route>
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
