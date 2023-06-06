import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import {
  KitchenItems,
  Books,
  Funstuff,
  Sports,
  Stationery,
} from "../assets/list";
import { CategoryList } from "../Components/CategoryList/CategoryList";
import { Slider } from "../Components/Slider/Slider";
export function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const categories = [
    { text: "KitchenItems", image: KitchenItems },
    { text: "Books", image: Books },
    { text: "Funstuff", image: Funstuff },
    { text: "Sports", image: Sports },
    { text: "Stationery", image: Stationery },
  ];
  function increaseSlideIndex() {
    setSlideIndex((indexValue) => {
      if (indexValue === categories.length - 1) indexValue = 0;
      else indexValue++;
      return indexValue;
    });
  }
  function decreaseSlideIndex() {
    setSlideIndex((indexValue) => {
      if (indexValue === 0) indexValue = categories.length - 1;
      else indexValue--;
      return indexValue;
    });
  }
  useEffect(() => {
    let slideTimerID = setInterval(() => increaseSlideIndex(), 3000);
    return () => {
      clearInterval(slideTimerID);
    };
  });
  return (
    <>
      <main style={{ marginLeft: "0" }}>
        <Slider
          increaseSlideIndex={increaseSlideIndex}
          decreaseSlideIndex={decreaseSlideIndex}
          slideIndex={slideIndex}
        />
        <CategoryList categories={categories} />
      </main>
    </>
  );
}
