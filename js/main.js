document.addEventListener("DOMContentLoaded", function() {
  const spans = document.querySelectorAll('.hero-title span');
  const divider = document.querySelector('.hero-divider');

  spans.forEach((span, idx) => {
      setTimeout(() => {
          span.style.opacity = 1;
          // 마지막 줄 이후 세로선 보여주기
          if (idx === spans.length - 1) {
              setTimeout(() => {
                  divider.classList.add('visible');
              }, 500);
          }
      }, idx * 900);
  });
});