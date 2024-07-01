const inputNume = document.querySelector("#input-nume");
const inputNumeAutor = document.querySelector("#input-numeautor");
const inputRating = document.querySelector("#input-rating");
const inputLinkImag = document.querySelector("#input-linkimg");
const inputVideo = document.querySelector("#input-video");
const inputAn = document.querySelector("#input-an");

const divError = document.querySelector('.div-error');

let movie = {
    nume: "",
    numeautor: "",
    rating: "",
    linkimg: "",
    video: "",
    an: "",
}

inputNume.addEventListener("change", (event) => {
    movie.nume = event.target.value;
})
inputNumeAutor.addEventListener("change", (event) => {
    movie.numeautor = event.target.value;
})
inputRating.addEventListener("change", (event) => {
    movie.rating = event.target.value;
})
inputLinkImag.addEventListener("change", (event) => {
    movie.linkimg = event.target.value;
})
inputVideo.addEventListener("change", (event) => {
    movie.video = event.target.value;
})
inputAn.addEventListener("change", (event) => {
    movie.an = event.target.value;
})

afisFormData = () => {
    console.log(movie);
}
const postUser = () => {
  fetch("http://localhost:3000/movies", {
    method: "POST",
    body: JSON.stringify(movie),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
};
testButton.addEventListener("click", postUser);
