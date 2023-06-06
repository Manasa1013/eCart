import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { Kitchen, Books, Funstuff, Sports, Stationery } from "../assets/list";
import { CategoryList } from "../Components/CategoryList/CategoryList";
import { Slider } from "../Components/Slider/Slider";
export function Home() {
  const [slideIndex, setSlideIndex] = useState(0);
  const categories = [Kitchen, Books, Funstuff, Sports, Stationery];
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
      <main>
        <Slider
          categories={categories}
          increaseSlideIndex={increaseSlideIndex}
          decreaseSlideIndex={decreaseSlideIndex}
          slideIndex={slideIndex}
        />
        <CategoryList categories={categories} />
      </main>
    </>
  );
}
