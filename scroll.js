document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section");

  console.log(sections);
  let isScrolling = false;

  const handleScroll = () => {
    if (isScrolling) return;

    isScrolling = true;

    setTimeout(() => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      let targetSection = sections[0];

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (scrollPosition >= sectionTop - windowHeight / 2) {
          targetSection = section;
        }
      });
      window.scrollTo({
        top: targetSection.offsetTop,
        behavior: "smooth",
      });

      isScrolling = false;
    }, 1000);
  };

  window.addEventListener("scroll", handleScroll);
});
