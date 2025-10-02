import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; 

// branch: feature/products-api

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 6;

  const { addToCart } = useCart();

  // Fetch Products
  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=100")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  // Filter products
  const filteredProducts = products.filter((product) => {
    return (
      product.title.toLowerCase().includes(search.toLowerCase()) &&
      (category === "all" || product.category === category)
    );
  });

  // Pagination
  const indexOfLast = currentPage * productsPerPage;
  const indexOfFirst = indexOfLast - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

return(
    <div className="shop">
        {/* Filters */}
              <div className="filters flex gap-4 mb-6">
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
                  <option value="smartphones">Smartphones</option>
                  <option value="laptops">Laptops</option>
                  <option value="fragrances">Fragrances</option>
                  <option value="skincare">Skincare</option>
                  <option value="groceries">Groceries</option>
                </select>
              </div>
        
              {/* Product List */}
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
                      onClick={() => addToCart(product)}
                      className="mt-3 bg-primary text-inverse px-4 py-2 rounded hover:bg-secondary transition"
                    >
                      Add to Cart
                    </button>
                  </div>
                ))}
              </div>
        
              {/* Pagination */}
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
)
}

export default Shop