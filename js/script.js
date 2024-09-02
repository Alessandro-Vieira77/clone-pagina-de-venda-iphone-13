const button = document.querySelectorAll("#image-pincker li");
const image = document.querySelector("#product-image");

// function trocar imagem
function selected(e) {
  const target = e.target;
  target.querySelector(".color").classList.add("selected");
  image.src = `img/iphone_${target.id}.jpg`;
  image.classList.add("changing");
  setTimeout(() => {
    image.classList.remove("changing");
  }, 200);
}

button.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    button.forEach((btn) => {
      btn.querySelector(".color").classList.remove("selected");
    });

    selected(e);
  });
});

image.addEventListener("click", (e) => {
  console.log(e);
});
