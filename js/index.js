// gnb 메뉴 누르면 해당 파트로 이동
const gnbA = document.querySelectorAll(".gnb li a");
const sections = document.querySelectorAll("section");
gnbA.forEach((gnb, idx) => {
  gnb.addEventListener("click", (e) => {
    e.preventDefault();
    const getBox = sections[idx].offsetTop;
    scrollTo({
      top: getBox,
      behavior: "smooth",
    });
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

// title 이름 밑줄
const myName = document.querySelector("strong");
const once = setTimeout(() => {
  myName.classList.add("active");
}, 2000);

// 슬라이더
const slider = document.querySelector(".slider_inner");
const progressBar = document.querySelector(".progress_bar_inner");

let sliderGrabbed = false;

slider.parentElement.addEventListener("scroll", (e) => {
  console.log(getScrollPercentage());
  progressBar.style.width = `${getScrollPercentage()}%`;
});
slider.addEventListener("mousedown", (e) => {
  sliderGrabbed = true;
  // slider.style.cursor = "grabbing";
});
slider.addEventListener("mouseup", (e) => {
  sliderGrabbed = false;
  // slider.style.cursor = "grab";
});
slider.addEventListener("mouseleave", (e) => {
  sliderGrabbed = false;
  // slider.style.cursor = "grab";
});
slider.addEventListener("mousemove", (e) => {
  if (sliderGrabbed) {
    slider.parentElement.scrollLeft -= e.movementX;
  }
});
// slider.addEventListener("wheel", (e) => {
//   e.preventDefault();
//   slider.parentElement.scrollLeft += e.delayY;
// });
function getScrollPercentage() {
  return (
    (slider.parentElement.scrollLeft /
      (slider.parentElement.scrollWidth - slider.parentElement.clientWidth)) *
    100
  );
}

// about text 타이핑
let text =
  "꾸준히 노력하고, 포기하지 않으며, 도전정신이 있는 프론트엔드 개발자";
let i = 0;
const about = document.querySelector("#about");
window.addEventListener("scroll", () => {
  const getAbout = about.offsetTop;
  const scrollY = window.scrollY;
  if (scrollY >= getAbout) {
    function typing() {
      if (i < text.length) {
        document.getElementById("text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
      } else if ((i) => text.length) {
        clearTimeout(typing);
      }
    }
    typing();
  }
});

// go_up about에 고정 + 스르륵 누르면 올라감
const goUp = document.querySelector(".go_up");
window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const getAbout = sections[3].offsetTop;
  if (scrollY >= getAbout) {
    goUp.style.opacity = 1;
  } else {
    goUp.style.opacity = 0;
  }
});
goUp.addEventListener("click", (e) => {
  e.preventDefault();
  scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// dots 누르면 색깔,모양 변경
const dots = document.querySelectorAll(".dots li");
dots.forEach((item) => {
  item.addEventListener("click", function (e) {
    e.preventDefault();
    for (let i = 0; i < dots.length; i++) {
      dots[i].classList.remove("on");
    }
    this.classList.add("on");
  });
});
// dots 누르면 해당 파트 이동
dots.forEach((dot, idx) => {
  dot.addEventListener("click", (e) => {
    e.preventDefault();
    const getBox = sections[idx].offsetTop;
    scrollTo({
      top: getBox,
      behavior: "smooth",
    });
  });
});
// dots 스크롤에 따른 각 색깔,모양 변경
window.addEventListener("scroll", () => {
  dots.forEach((dot, idx) => {
    const getSection = sections[idx].offsetTop - 200;
    const scrollY = window.scrollY;
    if (scrollY >= getSection) {
      dots.forEach((dot) => {
        dot.classList.remove("on");
      });
      dots[idx].classList.add("on");
    }
  });
});
// 마지막 dot 노랑색으로 변경
window.addEventListener("scroll", () => {
  const getAbout = sections[3].offsetTop - 300;
  const scrollY = window.scrollY;
  if (scrollY >= getAbout) {
    dots[3].style.backgroundColor = "yellow";
  } else {
    dots[3].style.backgroundColor = "#d9d9d9";
  }
});

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
