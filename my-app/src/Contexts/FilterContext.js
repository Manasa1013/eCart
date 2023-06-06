import { createContext, useContext, useState } from "react";

import { useProduct } from "./ProductContext";
export const FilterContext = createContext();

export function useFilter() {
  return useContext(FilterContext);
}

export function FilterProvider({ children }) {
  const { state } = useProduct();
  const { products } = state;
  const categoriesOfProducts = state.products?.reduce(
    (acc, curr) =>
      acc.includes(curr["category"]) ? [...acc] : [...acc, curr["category"]],
    []
  );

  const [filters, setFilters] = useState({
    priceRange: 0,
    searchText: "",
    category: [],
    rating: null,
    sortBy: null,
  });
  const [ratingList, setRatingList] = useState([4, 3, 2, 1]);
  const [sortByList, setSortByList] = useState(["Low to High", "High to Low"]);
  function filterByPriceRange(products, priceRange) {
    if (priceRange === 0) return products;
    else {
      const filteredByPriceRange = products.filter(
        (product) => Number(product.price) <= priceRange
      );
      console.log({ filteredByPriceRange });
      return filteredByPriceRange;
    }
  }

  function filterByCategory(products, category) {
    if (category.length === 0) return products;
    const filteredByCategoryProducts = products?.reduce((acc, curr) => {
      return category?.includes(curr.category) ? [...acc, curr] : [...acc];
    }, []);
    console.log({ filteredByCategoryProducts });
    return filteredByCategoryProducts;
  }
  function filterBySingleCategory(products, singleCategory) {
    if (singleCategory === null) return products;
    const filteredBySingleCategoryProducts = products?.filter(
      (product) => product.category === singleCategory
    );
    console.log({ filteredBySingleCategoryProducts });
    return filteredBySingleCategoryProducts;
  }
  function filterByRating(products, rating) {
    if (rating === null) return products;
    const filteredByRatingProducts = products?.filter(
      (product) => product.rating.rate >= rating
    );
    console.log({ filteredByRatingProducts });
    return filteredByRatingProducts;
  }
  function filterBySortPrice(products, sortBy) {
    if (sortBy === null) return products;
    let filteredBySortPriceProducts = products;
    if (sortBy === null) return filteredBySortPriceProducts;
    else if (sortBy === sortByList[0]) {
      filteredBySortPriceProducts = products?.sort((a, b) => a.price - b.price);
    } else if (sortBy === sortByList[1]) {
      filteredBySortPriceProducts = products?.sort((a, b) => b.price - a.price);
    }
    console.log(filteredBySortPriceProducts, sortBy);
    return filteredBySortPriceProducts;
  }
  function filterBySearchText(products, searchText) {
    console.log(typeof products);
    let updatedProducts = [...products];
    updatedProducts = updatedProducts?.filter((product) => {
      const { description, name, brand, category } = product;

      return (
        description.toLowerCase().includes(searchText.toLowerCase()) ||
        name.toLowerCase().includes(searchText.toLowerCase()) ||
        brand.toLowerCase().includes(searchText.toLowerCase()) ||
        category.toLowerCase().includes(searchText.toLowerCase())
      );
    });
    return updatedProducts;
  }
  function filteredProducts(products) {
    const filteredByPriceRange = filterByPriceRange(
      products,
      filters.priceRange
    );

    const filteredByCategory = filterByCategory(
      filteredByPriceRange,
      filters.category
    );
    const filteredByRating = filterByRating(filteredByCategory, filters.rating);
    const filteredBySortPrice = filterBySortPrice(
      filteredByRating,
      filters.sortBy
    );
    console.log({ filteredBySortPrice });
    const fullyFiltered = filterBySearchText(
      filteredBySortPrice,
      filters.searchText
    );
    console.log({ fullyFiltered });
    return fullyFiltered;
  }
  filteredProducts(state.products);
  return (
    <FilterContext.Provider
      value={{
        filters,
        setFilters,
        categoriesOfProducts,
        ratingList,
        sortByList,
        filterByPriceRange,
        filterByCategory,
        filterByRating,
        filterBySortPrice,
        filterBySingleCategory,
        filteredProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
