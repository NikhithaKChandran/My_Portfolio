function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
  }

  

  document.addEventListener("DOMContentLoaded", function() {
    const typingElements = document.querySelectorAll(".typing-animation");
    typingElements.forEach(element => {
      animateText(element);
    });

    function animateText(element) {
      const text = element.getAttribute("data-text");
      let index = 0;
      let interval = setInterval(function() {
        if (index <= text.length) {
          element.textContent = text.slice(0, index);
          index++;
        } else {
          clearInterval(interval);
          setTimeout(function() {
            animateText(element);
          }, 1000); // Adjust delay between animations (1 second here)
        }
      }, 100); // Adjust typing speed (milliseconds here)
    }
  });

  