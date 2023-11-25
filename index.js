function getRandomColor() {
    const random = () => Math.floor(Math.random() * 256);
    return `rgb(${random()}, ${random()}, ${random()})`;
  }

  module.exports = getRandomColor;