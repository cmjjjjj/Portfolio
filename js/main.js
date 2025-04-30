document.addEventListener("DOMContentLoaded", function () {
  // 👉 Hero 텍스트, 버튼, 세로선 순차 애니메이션
  const spans = document.querySelectorAll(".hero-title span");
  const heroMoreBtn = document.querySelector(".hero_more-btn");
  const divider = document.querySelector(".hero-divider");

  spans.forEach((span, idx) => {
    setTimeout(() => {
      span.style.opacity = 1;

      // 마지막 줄 이후 버튼 -> 세로선
      if (idx === spans.length - 1) {
        setTimeout(() => {
          heroMoreBtn.classList.add("visible");

          setTimeout(() => {
            divider.classList.add("visible");
          }, 600); // 버튼 뜨고 0.6초 후 세로선
        }, 800); // 텍스트 마지막 나오고 0.8초 후 버튼
      }
    }, idx * 900); // 텍스트 순차 등장
  });

  // 👉 공모전 더보기 버튼 알림
  window.toggleMore = function () {
    alert("더보기 기능은 아직 구현되지 않았습니다.");
  };

  // 👉 Skills 스크롤 감지 애니메이션
  const skillSection = document.querySelector(".skills");
  const progressBars = document.querySelectorAll(".progress");
  let skillAnimated = false;

  function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top <= window.innerHeight && rect.bottom >= 0;
  }

  function animateSkillBars() {
    if (skillAnimated) return;

    if (isInViewport(skillSection)) {
      progressBars.forEach(bar => {
        const percent = bar.getAttribute("data-rate");
        bar.style.width = percent + "%";
      });
      skillAnimated = true;
    }
  }

  window.addEventListener("scroll", animateSkillBars);

  // 👉 부드러운 스크롤 이동 (About 섹션)
  const scrollBtn = document.querySelector(".scroll-to-about");
  const aboutSection = document.querySelector("#AboutMe");

  if (scrollBtn && aboutSection) {
    scrollBtn.addEventListener("click", function (e) {
      e.preventDefault();
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: "smooth"
      });
    });
  }
});
