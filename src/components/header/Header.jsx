import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  FaHeart,
  FaSearch,
  FaShoppingCart,
  FaTimes,
  FaUser,
} from "react-icons/fa";

import "./style.scss";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../assets/anikart.png";

function Header() {
  const [show, setShow] = useState("show");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [query, setQuery] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY) {
        setShow("hide");
        setShowSearch(false);
      } else {
        setShow("show");
      }
    } else {
      setShow("show");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const openSearch = () => {
    setShowSearch(true);
  };

  const searchQueryHandler = (event) => {
    if (event.key === "Enter" && query.length > 0) {
      navigate(`/search/${query}`);
      setShowSearch(false);
    }
  };

  const navigationHandler = (type) => {
    if (type === "search") {
      openSearch();
    } else if (type === "whishlist") {
      navigate("/wishlist");
    } else if (type === "cart") {
      navigate("/cart");
    } else {
      navigate("/user");
    }
  };

  return (
    <header className={`header ${show}`}>
      <ContentWrapper>
        <div
          className="logo"
          onClick={() => {
            navigate("/");
          }}
        >
          <img src={logo} alt="" />
        </div>
        <ul className="menuItems">
          <li className="menuItem">
            <FaSearch
              onClick={() => {
                navigationHandler("search");
              }}
            />
          </li>
          <li className="menuItem">
            <FaHeart
              onClick={() => {
                navigationHandler("wishlist");
              }}
            />
          </li>
          <li className="menuItem">
            <FaShoppingCart
              onClick={() => {
                navigationHandler("cart");
              }}
            />
          </li>
          <li className="menuItem">
            <FaUser
              onClick={() => {
                navigationHandler("user");
              }}
            />
          </li>
        </ul>
      </ContentWrapper>
      {showSearch && (
        <div className="searchBar">
          <ContentWrapper>
            <div className="searchInput">
              <input
                type="text"
                placeholder="Search for a product.."
                onChange={(e) => {
                  setQuery(e.target.value);
                }}
                onKeyUp={searchQueryHandler}
              />
              <FaTimes
                onClick={() => {
                  setShowSearch(false);
                }}
              />
            </div>
          </ContentWrapper>
        </div>
      )}
    </header>
  );
}

export default Header;
