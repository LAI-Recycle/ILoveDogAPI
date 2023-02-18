let button = document.querySelector("button");
let show = document.querySelector(".show");

button.addEventListener("click", function () {
  axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      console.log(response.data.message);
      show.src = response.data.message;
      // show.innerHTML = lyrics
    })
    .catch((error) => console.log(error));
});
