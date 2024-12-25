// Grab wrapper nodes
const rootNode = document.querySelector(".embla");
// Grab button nodes
const prevButtonNode = rootNode.querySelector(".embla__button--prev");
const nextButtonNode = rootNode.querySelector(".embla__button--next");

const options = { loop: true };
// const plugins = [EmblaCarouselAutoplay()];
const emblaApi = EmblaCarousel(rootNode, options);
prevButtonNode.addEventListener("click", emblaApi.scrollPrev);
nextButtonNode.addEventListener("click", emblaApi.scrollNext);

window.onscroll = function () {
  const navbar = document.getElementById("mid-sec");
  if (window.scrollY >= 50) {
    navbar.classList.add("fixed");
  } else {
    navbar.classList.remove("fixed");
  }
};
// Accordion
let head = document.getElementsByClassName("button");
let body = document.getElementsByClassName("acoordion-body");
for (let index of head) {
  index.addEventListener("click", () => {
    body[this.length].classList.add("show");
    // console.log(this.length);

    // console.log(index);
  });
}
