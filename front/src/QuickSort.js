const sortPriceLowHigh = (list) => {
  if (list.length < 2) return list;
  let pivot = list[0];
  let left = [];
  let right = [];
  for (let i = 1, total = list.length; i < total; i++) {
    if (list[i].price["$numberDecimal"] < pivot.price["$numberDecimal"])
      left.push(list[i]);
    else right.push(list[i]);
  }
  return [...sortPriceLowHigh(left), pivot, ...sortPriceLowHigh(right)];
};

const sortPriceHighLow = (list) => {
  if (list.length < 2) return list;
  let pivot = list[0];
  let left = [];
  let right = [];
  for (let i = 1, total = list.length; i < total; i++) {
    if (list[i].price["$numberDecimal"] > pivot.price["$numberDecimal"])
      left.push(list[i]);
    else right.push(list[i]);
  }
  return [...sortPriceHighLow(left), pivot, ...sortPriceHighLow(right)];
};


module.exports = { sortPriceLowHigh, sortPriceHighLow };
