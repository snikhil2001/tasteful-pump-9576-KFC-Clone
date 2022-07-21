let imageArr = [
  {
    img1: "https://images.ctfassets.net/9tka4b3550oc/7HX3W4TVNu5R6rcvWH2953/4ad38dcb416ec8c7bb8c2648359cfb96/Beyond-digital-sky-clouds.jpg?q=75&w=1680",
    p1: "FOR A LIMITED TIME ONLY",
    heading: "IT'S A KENTUCKY FRIED MIRACLE",
    p2: "Tastes like fried chicken but made from plants.Not prepared in a vegan/vegetarian manner",
  },
  {
    img1: "https://images.ctfassets.net/9tka4b3550oc/2n8aAQdiqF8cJRU8aoYeHY/dac719b94cb135750b4e76a68325e60e/10-pc-feast-hero_desktop.jpg?q=75&w=1680",
    p1: "",
    heading: "NOW AVAILABLE",
    p2: "10 Piece Feast.ALL DINNER.NO DISHES",
  },
];

let imageState = 0;

let leftBtn = document.getElementById("left-btn");
let rightBtn = document.getElementById("right-btn");
let crauser = document.getElementById("crauser");

leftBtn.addEventListener("click", function () {});

rightBtn.addEventListener("click", function () {
  imageState++;
  crauser.src = imageArr[imageState].img1;
});
