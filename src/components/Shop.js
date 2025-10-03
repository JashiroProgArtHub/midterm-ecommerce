import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("default");
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(2000);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const { addToCart } = useCart();

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const q = params.get("q") || "";

  useEffect(() => {
    setSearch(q);
  }, [q]);

  useEffect(() => {
    setCurrentPage(1);
  }, [category, search, sort, minPrice, maxPrice]);

  let filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "all" || product.category === category) &&
      product.price >= minPrice &&
      product.price <= maxPrice
    );
  });

  if (sort === "priceLowHigh") {
    filteredProducts = [...filteredProducts].sort((a, b) => a.price - b.price);
  } else if (sort === "priceHighLow") {
    filteredProducts = [...filteredProducts].sort((a, b) => b.price - a.price);
  } else if (sort === "nameAZ") {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
  } else if (sort === "nameZA") {
    filteredProducts = [...filteredProducts].sort((a, b) =>
      b.title.localeCompare(a.title)
    );
  }

  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  return (
    <div className="shop">
      <div className="filters flex flex-wrap gap-4 mb-6">
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border p-2 rounded w-1/2"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="all">All Categories</option>
          <option value="mens-shirts">Mens Shirts</option>
          <option value="laptops">Laptops</option>
          <option value="fragrances">Fragrances</option>
          <option value="home-decoration">Home Decor</option>
          <option value="groceries">Groceries</option>
          <option value="beauty">Beauty</option>
          <option value="furniture">Furniture</option>
        </select>

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="default">Sort By</option>
          <option value="priceLowHigh">Price: Low → High</option>
          <option value="priceHighLow">Price: High → Low</option>
          <option value="nameAZ">Name: A → Z</option>
          <option value="nameZA">Name: Z → A</option>
        </select>

        <div className="flex items-center gap-2">
          <input
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(Number(e.target.value))}
            className="border p-2 rounded w-24"
            placeholder="Min"
          />
          <span>-</span>
          <input
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="border p-2 rounded w-24"
            placeholder="Max"
          />
        </div>
      </div>

      <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {currentProducts.map((product) => (
          <div
            key={product.id}
            className="product-card border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <Link to={`/product/${product.id}`}>
              <img
                src={product.thumbnail}
                alt={product.title}
                className="w-full h-40 object-cover rounded mb-3"
              />
              <h3 className="font-semibold text-lg">{product.title}</h3>
            </Link>
            <p className="text-primary font-bold mt-2">${product.price}</p>
            <button
              onClick={() => {
                if (!isAuthenticated) {
                  loginWithRedirect(); // redirect to login if not logged in
                  return;
                }
                addToCart(product);
              }}
              className="mt-3 bg-primary text-inverse px-4 py-2 rounded hover:bg-secondary transition"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      <div className="pagination flex justify-center gap-2 mt-8">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded border ${
              currentPage === i + 1
                ? "bg-primary text-inverse"
                : "bg-white hover:bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Shop;
