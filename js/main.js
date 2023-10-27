let prog = document.querySelectorAll(".skill .prog");
let ourSkill = document.getElementById("our-skills");

window.addEventListener("scroll", function () {
  if (window.scrollY >= ourSkill.offsetTop - 300) {
    console.log(1);
    prog.forEach((e) => (e.style.width = e.dataset.width));
  }
});

//  ###############
let stat = document.getElementById("stats");
let p = document.querySelectorAll("#stats p");
let started = false;
window.addEventListener("scroll", function () {
  if (window.scrollY >= stat.offsetTop - 400) {
    if (!started) {
      p.forEach((e) => counter(e));
    }
    started = true;
  }
});
function counter(el) {
  let a = setInterval(() => {
    el.innerHTML++;
    if (el.innerHTML == el.dataset.count) {
      clearInterval(a);
    }
  }, 2000 / el.dataset.count);
}
//  ################
let body = document.body;
let scrollProg = document.querySelector(".scroll-prog");
window.addEventListener("scroll", function () {
  scrollProg.style.width = `${
    (window.scrollY / (body.scrollHeight - +window.innerHeight)) * 100
  }%`;
});
