import { useState } from "react";
import Product_cart from "../components/product_cart";

const Search = () => {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [category, setCategory] = useState("");
  const [page, setPage] = useState<number>(0); // Set page as a number

  function addToCartHandler(): void {
    throw new Error("Function not implemented.");
  }
const isNextPage = page<4;
const isPrevPage = page>0;
  return (
    <div className="product-search-page">
      <aside>
        <h2>Filters</h2>
        <div>
          <h4>Sort</h4>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">None</option>
            <option value="asc">Price (Low to high)</option>
            <option value="dsc">Price (High to Low)</option>
          </select>
        </div>
        <div>
          <h4>Max Price: {maxPrice || ""}</h4>
          <input
            type="range"
            min={100}
            max={1000000}
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
          />
        </div>
        <div>
          <h4>Category</h4>
          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">all</option>
            <option value="Sample1">Sample1</option>
            <option value="Sample2">Sample2</option>
          </select>
        </div>
      </aside>
      <main>
        <h1>Products</h1>
        <input
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <div className="search-product-list">
          <Product_cart
            productId="sdfasd"
            name="macbook"
            price={788}
            stock={21}
            handler={addToCartHandler}
            photo="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZRQqzihZ0oLFJPvDHrAlxqGL0VeQWiEYf0Q&usqp=CAU"
          />
        </div>
        <article>
          <button disabled = {!isPrevPage} onClick={() => setPage((prev) => prev - 1)}>Prev</button>
          <span> {page} of {4}</span>
          <button disabled = {!isNextPage} onClick={() => setPage((prev) => prev + 1)}>Next</button>
        </article>
      </main>
    </div>
  );
};

export default Search;
