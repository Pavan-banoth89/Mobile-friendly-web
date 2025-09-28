const images = [
  "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
  "https://images.unsplash.com/photo-1501785888041-af3ef285b470",
  "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee",
  "https://images.unsplash.com/photo-1491553895911-0055eca6402d"
];

let index = 0;
const changeBackground = () => {
  document.body.style.backgroundImage = `url(${images[index]})`;
  index = (index + 1) % images.length;
};
setInterval(changeBackground, 6000);
