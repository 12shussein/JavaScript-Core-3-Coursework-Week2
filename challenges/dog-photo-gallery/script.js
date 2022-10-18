
let imgList = document.getElementById("images");
let button = document.getElementById("btn")
let ul = document.getElementById("ul-list")

const DogPhotoImages = function () {
  fetch("https://dog.ceo/api/breeds/image/random")
    .then((response) => response.json())
    .then((data) => {
      let list = document.createElement("li");
      list.setAttribute("id","img")
      let img = document.createElement("img");
      ul.appendChild(imgList);
      imgList.appendChild(list);
      list.appendChild(img);
      img.src = data.message;
    })
    .catch(err => console.log(err.message));
};

button.addEventListener("click", DogPhotoImages)


