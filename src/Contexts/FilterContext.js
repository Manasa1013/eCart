import { createContext, useContext, useState } from "react";

import { useProduct } from "./ProductContext";
export const FilterContext = createContext();

export function useFilter() {
  return useContext(FilterContext);
}

export function FilterProvider({ children }) {
  const { products, setProducts } = useProduct();
  const categoriesOfProducts = products?.reduce(
    (acc, curr) =>
      acc.includes(curr["category"]) ? [...acc] : [...acc, curr["category"]],
    []
  );
  // .map((categoryItem) => ({
  //   category: categoryItem,
  //   isChecked: null,
  // }));
  const [filters, setFilters] = useState({
    priceRange: 0,
    // category: categoriesOfProducts,
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
  //   function filterByCategory(products, category) {
  //     if (category.map(({ isChecked }) => isChecked).includes(null)) {
  //       console.log("at category null ", { filterCategoryList: products });
  //     }
  //     return products;

  //     const filteredCategories = category
  //       ?.filter(({ isChecked }) => isChecked)
  //       .map((categoryItem) => categoryItem.category);
  //     const filteredByCategoryProducts = products?.reduce((acc, curr) => {
  //       return filteredCategories.includes(curr.category)
  //         ? [...acc, curr]
  //         : [...acc];
  //     }, []);
  //     console.log({ filteredByCategoryProducts });
  //     return filteredByCategoryProducts;
  //   }
  function filterByCategory(products, category) {
    if (category.length === 0) return products;
    const filteredByCategoryProducts = products?.reduce((acc, curr) => {
      return category?.includes(curr.category) ? [...acc, curr] : [...acc];
    }, []);
    console.log({ filteredByCategoryProducts });
    return filteredByCategoryProducts;
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
    return filteredBySortPrice;
  }
  filteredProducts(products);
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
        filteredProducts,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
}
