function Grids() {
  const gridArray = Array.from({ length: 18 }, (_, index) => index + 1);
  const grids = [...gridArray, ...gridArray].sort(() => Math.random() - 0.5);
  const cards = grids.map((grid, index) => {
    return { id: index, number: grid, isFlipped: false };
  });
  return cards;
}

export default Grids;
