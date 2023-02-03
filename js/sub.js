// 마우스 커서 변경
const innerCursor = document.querySelector(".inner_cursor");
const outerCursor = document.querySelector(".outer_cursor");

document.addEventListener("mousemove", moveCursor);

function moveCursor(e) {
  let x = e.clientX;
  let y = e.clientY;

  innerCursor.style.left = `${x}px`;
  innerCursor.style.top = `${y}px`;
  outerCursor.style.left = `${x}px`;
  outerCursor.style.top = `${y}px`;
}
const links = Array.from(document.querySelectorAll("a"));

links.forEach((link) => {
  link.addEventListener("mousemove", () => {
    innerCursor.classList.add("grow");
  });
  link.addEventListener("mouseleave", () => {
    innerCursor.classList.remove("grow");
  });
});

// gnb 스크롤 내리면 사라지고, 올리면 나타남
let lastScrollTop = 0;
let gnb = document.querySelector(".gnb");
window.addEventListener("scroll", () => {
  let scrollTop = window.pageXOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    gnb.style.top = "-70px";
  } else {
    gnb.style.top = "0";
  }
  lastScrollTop = scrollTop;
});
