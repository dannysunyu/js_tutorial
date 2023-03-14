function product(numbers) {
  return numbers.reduce((product, n) => {
    return product *= n;
   }, 1);
}

