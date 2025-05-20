function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

document.addEventListener('DOMContentLoaded', () => {
  const textElement = document.querySelector('#typewriter-text');
  const text = textElement.textContent;
  textElement.textContent = '';

  let index = 0;
  const typeSpeed = 100;

  function typeWriter() {
    if (index < text.length) {
      textElement.textContent += text.charAt(index);
      index++;
      setTimeout(typeWriter, typeSpeed);
    } else {
      textElement.style.borderRight = 'none'; 
    }
  }

  typeWriter();
});