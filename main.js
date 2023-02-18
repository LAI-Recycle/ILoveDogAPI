let button = document.querySelector("button");
let show = document.querySelector(".show");

function Wordchange(){
  const wordslist = ['Thats awesome!', 'Sweet!', 'I like it!', 'looks great!', 'Great!']
  let rand = Math.floor(Math.random()*wordslist.length);
  let wordlist = wordslist[rand];
  return wordlist
}
  
button.addEventListener("click", function () {
  axios
    .get("https://dog.ceo/api/breeds/image/random")
    .then((response) => {
      console.log(response.data.message);
      show.src = response.data.message;
      // show.innerHTML = lyrics
    })
    .catch((error) => console.log(error));
  button.innerText = Wordchange()
});
