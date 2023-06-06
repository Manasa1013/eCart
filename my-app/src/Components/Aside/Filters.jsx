import { useState } from "react";
import { useFilter } from "../../Contexts/FilterContext";
import { useProduct } from "../../Contexts/ProductContext";

export function Filters() {
  const { state } = useProduct();
  const { products } = state;
  const {
    filters,
    setFilters,
    categoriesOfProducts,
    ratingList,
    sortByList,
    filteredProducts,
  } = useFilter();
  function updatedCategories(categoryList, checked, value) {
    if (checked) return [...categoryList, value];
    else if (!checked)
      return categoryList.filter((category) => category !== value);
  }
  function resetFilter(filter) {
    setFilters((prev) => ({
      ...prev,
      priceRange: 0,
      category: [],
      rating: null,
      sortBy: null,
    }));
  }
  return (
    <>
      <ul className="filter__list">
        <li className="justify-between">
          <h3>Filters</h3>
          <button
            type="reset"
            onClick={() => {
              console.log("clicked clear", products);
              resetFilter(filters);
            }}
            className="text-underline button"
          >
            Clear
          </button>
        </li>
        <li className="flex columns-flex">
          <label htmlFor="range" className="weight-600">
            Price
          </label>
          <input
            id="range"
            type="range"
            className="range"
            value={filters.priceRange}
            min="1"
            max="3000"
            step="30"
            list="values"
            onInput={(e) => {
              console.log(
                e.target.value,
                { filters },
                typeof filters.priceRange
              );
              setFilters((prev) => ({
                ...prev,
                priceRange: Number(e.target.value),
              }));
              // filterByPriceRange(products, filters.priceRange);
              filteredProducts(products);
            }}
          />

          <datalist id="values" className="flex column-flex justify-between">
            <option value="1" label="1"></option>
            <option value="1500" label="1500"></option>
            <option value="3000" label="3000"></option>
          </datalist>
        </li>
        <li className="flex columns-flex">
          <p className="weight-600">Category</p>
          <ul className="">
            {categoriesOfProducts?.map((category) => (
              <li key={category} className="flex row-flex category-list">
                <input
                  type="checkbox"
                  id={category}
                  value={category}
                  checked={filters.category.includes(category)}
                  onChange={(e) => {
                    let { checked, value } = e.target;
                    console.log(checked, value);

                    setFilters((prev) => ({
                      ...prev,
                      category: updatedCategories(
                        prev.category,
                        checked,
                        value
                      ),
                    }));
                    filteredProducts(products);
                  }}
                />
                <label htmlFor={category}>{category}</label>
              </li>
            ))}
          </ul>
        </li>
        <li className="flex columns-flex">
          <label htmlFor="rating" className="weight-600">
            Rating
          </label>
          <ul className="">
            {ratingList?.map((rating) => (
              <li key={rating} className="flex row-flex category-list">
                <input
                  type="radio"
                  value={rating}
                  name={ratingList}
                  checked={filters.rating === parseInt(rating, 10)}
                  id={rating}
                  onChange={(e) => {
                    console.log(e.target.value, typeof e.target.value);
                    setFilters((prev) => ({
                      ...prev,
                      rating: Number(e.target.value),
                    }));
                    // filterByRating(products, filters.rating);
                    filteredProducts(products);
                  }}
                />
                <label htmlFor={rating}>{rating} Stars & above</label>
              </li>
            ))}
          </ul>
        </li>
        <li className="flex columns-flex">
          <label htmlFor="sort-by" className="weight-600">
            Sort By
          </label>
          <ul className="">
            {sortByList?.map((sortBy) => (
              <li key={sortBy} className="flex row-flex category-list">
                <input
                  type="radio"
                  value={sortBy}
                  id={sortBy}
                  checked={filters.sortBy === sortBy}
                  name={sortByList}
                  onChange={(e) => {
                    console.log(e.target.value, e.target.checked);
                    setFilters((prev) => ({
                      ...prev,
                      sortBy: e.target.value,
                    }));
                    // filterBySortPrice(products, filters.sortBy);
                    filteredProducts(products);
                  }}
                />
                <label htmlFor={sortBy}>Price : {sortBy}</label>
              </li>
            ))}
          </ul>
        </li>
      </ul>
    </>
  );
}
