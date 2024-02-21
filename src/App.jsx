import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import Cart from "./pages/cart/Cart";
import Categories from "./pages/categories/Categories";
import Wishlist from "./pages/wishlist/Wishlist";
import SearchResult from "./pages/searchResults/SearchResults";
import PageNotFound from "./pages/pageNotFound/PageNotFound";
import User from "./pages/user/User";

function App() {
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
        <Route path="*" element={<PageNotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
