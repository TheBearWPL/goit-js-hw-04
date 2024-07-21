"use strict";
function isEnoughCapacity(products, containerSize) {
  const totalQuantity = Object.values(products).reduce(
    (acc, curr) => acc + curr,
    0
  );
  return totalQuantity <= containerSize;
}
