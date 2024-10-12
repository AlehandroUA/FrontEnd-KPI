"use strict";

const element0 = document.getElementById("first");
const element1 = document.querySelector(".second");
let isClickedFirst = false;
let isClickedSecond = false;
let [color0, color1, text0, text1] = "";
let image = document.getElementById("image");
let originalWidth = image.width;

const initColors = function () {
  color0 = "cyan";
  color1 = "magenta";
  text0 = "magenta";
  text1 = "yellow";
};

const changeColors = function () {
  if (color0 === "cyan") {
    console.log("here");
    color0 = "magenta";
    text0 = "yellow";
    text1 = "magenta";
    color1 = "cyan";
  } else {
    initColors();
  }
  updateStyles();
};

const updateStyles = function () {
  if (isClickedFirst) {
    element0.style.background = color0;
    element0.style.color = text0;
  }
  if (isClickedSecond) {
    element1.style.background = color1;
    element1.style.color = text1;
  }
};

initColors();

element0.addEventListener("click", function () {
  if (isClickedFirst && isClickedSecond) changeColors();
  if (!isClickedFirst) {
    isClickedFirst = true;
    updateStyles();
  }
});

element1.addEventListener("click", function () {
  if (isClickedFirst && isClickedSecond) changeColors();
  if (!isClickedSecond) {
    isClickedSecond = true;
    updateStyles();
  }
});

document
  .querySelector("button:nth-child(1)")
  .addEventListener("click", function () {
    if (!document.getElementById("image")) {
      let newImage = document.createElement("img");
      newImage.id = "image";
      newImage.src =
        "https://api-prod.gothamist.com/images/79209/fill-893x595%7Cformat-webp%7Cwebpquality-70/";
      newImage.alt = "Placeholder Image";
      document
        .querySelector(".imageContainer")
        .insertBefore(newImage, document.querySelector(".buttons"));
      image = newImage;
    }
  });

document
  .querySelector("button:nth-child(2)")
  .addEventListener("click", function () {
    image.style.width = image.offsetWidth + 20 + "px";
  });

document
  .querySelector("button:nth-child(3)")
  .addEventListener("click", function () {
    if (image.offsetWidth > 20) {
      image.style.width = image.offsetWidth - 20 + "px";
    }
  });

document
  .querySelector("button:nth-child(4)")
  .addEventListener("click", function () {
    if (image) {
      image.remove();
    }
  });
