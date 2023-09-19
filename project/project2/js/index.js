// 메뉴 toggle기능 생성
const gnb = document.querySelector('.navbar_menu');
      const toggleBtn = document.querySelector('#toggle_btn');

      toggleBtn.addEventListener('click', () => {
        gnb.classList.toggle('active');
      })

// 타이핑효과
let i = 0;
let text = "기억을 넘어 희망을 품다.";

function typing() {
  if(i < text.length) {
    document.getElementById("typing").innerHTML += text.charAt(i);
    i++;
    setTimeout(typing,50)
  }
}
typing()

// swiper
      var swiper = new Swiper(".mySwiper", {
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
          renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
          },
        },
      });

      var swiper = new Swiper(".mySwiper2", {
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
        slidesPerView: 2,
        spaceBetween: 50,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      var swiper = new Swiper(".mySwiper3", {
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
        slidesPerView: 2.2,
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

      var swiper = new Swiper(".mySwiper4", {
        autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });