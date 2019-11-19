const addMovieModal = document.getElementById("add-modal");

// The following also works but might be slower
// const addMovieModal2 = document.querySelector("#add-modal");
// const addMovieModal3 = document.body.children[1];

const startAddMovieButton = document.querySelector("header button");
// const startAddMovieButton = document.querySelector("header").lastElementChild;

const backdrop = document.getElementById("backdrop");
// const backdrop = document.body.firstElementChild;

const toggleBackdrop = () => {
  backdrop.classList.toggle("visible");
};

const toggleMovieModel = () => {
  addMovieModal.classList.toggle("visible");
  toggleBackdrop();
};

startAddMovieButton.addEventListener("click", toggleMovieModel);

const backdropClickHandler = () => {
    toggleMovieModel();
};
backdrop.addEventListener("click", backdropClickHandler);
