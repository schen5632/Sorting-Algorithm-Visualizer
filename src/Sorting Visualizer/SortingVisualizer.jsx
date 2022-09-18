import React from "react";
import "./SortingVisualizer.css";
import { useState } from "react";
import { getMergeSortAnimations } from "../Sorting Algorithms/MergeSort.js";
import { getBubbleSortAnimations } from "../Sorting Algorithms/BubbleSort.js";
import { getSelectionSortAnimations } from "../Sorting Algorithms/SelectionSort.js";
import { getQuickSortAnimations } from "../Sorting Algorithms/QuickSort.js";

const PRIMARY_COLOR = "blue";
const SECONDARY_COLOR = "red";
const ANIMATION_SPEED = 1;

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function bubbleColours(array) {
  console.log(array);
  const animations = getBubbleSortAnimations(array);
  console.log(animations);
  for (let i = 0; i < animations.length; i++) {
    const bars = document.getElementsByClassName("array-bar");
    const change = i % 4;
    if (change <= 1) {
      const [barOneIndex, barTwoIndex] = animations[i];
      const barOneStyle = bars[barOneIndex].style;
      const barTwoStyle = bars[barTwoIndex].style;
      const colour = change === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
      setTimeout(() => {
        barOneStyle.backgroundColor = colour;
        barTwoStyle.backgroundColor = colour;
      }, i * ANIMATION_SPEED);
    } else {
      const [index, newHeight] = animations[i];
      if (index === -1) {
        continue;
      } else {
        setTimeout(() => {
          const barOneStyle = bars[index].style;
          barOneStyle.height = `${newHeight}vh`;
        }, i * ANIMATION_SPEED);
      }
    }
  }
}

function selectColours(array) {
  const animations = getSelectionSortAnimations(array);
  console.log(animations);

  for (let i = 0; i < animations.length; i++) {
    const bars = document.getElementsByClassName("array-bar");
    if (animations[i][0] >= -2) {
      const barOneStyle = bars[animations[i][1]].style;
      const barTwoStyle = bars[animations[i][2]].style;
      const colour = animations[i][0] === -1 ? SECONDARY_COLOR : PRIMARY_COLOR;
      setTimeout(() => {
        barOneStyle.backgroundColor = colour;
        barTwoStyle.backgroundColor = colour;
      }, i * ANIMATION_SPEED);
    } else {
      setTimeout(() => {
        const barOneStyle = bars[animations[i][1]].style;
        barOneStyle.height = `${animations[i][2]}vh`;
      }, i * ANIMATION_SPEED);
    }
  }
}

function mergeColours(array) {
  const animations = getMergeSortAnimations(array);
  console.log(animations);
  for (let i = 0; i < animations.length; i++) {
    const bars = document.getElementsByClassName("array-bar");
    const change = i % 3 !== 2;
    if (change) {
      const [barOneIndex, barTwoIndex] = animations[i];
      const barOneStyle = bars[barOneIndex].style;
      const barTwoStyle = bars[barTwoIndex].style;
      const colour = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
      setTimeout(() => {
        barOneStyle.backgroundColor = colour;
        barTwoStyle.backgroundColor = colour;
      }, i * ANIMATION_SPEED);
    } else {
      setTimeout(() => {
        const [index, newHeight] = animations[i];
        const barOneStyle = bars[index].style;
        barOneStyle.height = `${newHeight}vh`;
      }, i * ANIMATION_SPEED);
    }
  }
}

function quickColours(array) {
  const animations = getQuickSortAnimations(array);
  console.log(animations);
}

const SortingVisualizer = () => {
  const [array, setArray] = useState([]);
  const newArray = () => {
    setArray([]);
    for (let i = 0; i < 180; i++) {
      let randNum = randomInt(5, 90);
      setArray((current) => [...current, randNum]);
    }
  };

  const bubbleSort = () => {
    bubbleColours(array);
  };
  const mergeSort = () => {
    mergeColours(array);
  };

  const selectionSort = () => {
    selectColours(array);
  };

  const quickSort = () => {
    quickColours(array);
  };
  return (
    <div>
      <button onClick={newArray}>Generate New Array</button>
      <button onClick={bubbleSort}>Bubble Sort</button>
      <button onClick={selectionSort}>Selection Sort</button>
      <button onClick={mergeSort}>Merge Sort</button>
      <button onClick={quickSort}>Quick Sort</button>
      <div className="array-container">
        {array.map((value, keyVal) => {
          return (
            <div
              className="array-bar"
              key={keyVal}
              style={{ height: `${value}vh`, backgroundColor: PRIMARY_COLOR }}
            ></div>
          );
        })}
      </div>
    </div>
  );
};

export default SortingVisualizer;
