// Typing effect
const roles = ["Full Stack Developer", "Django Specialist", "Problem Solver"];
let i = 0, j = 0, current = "", isDeleting = false;

function type() {
  const element = document.querySelector(".typing");

  if (!isDeleting && j <= roles[i].length) {
    current = roles[i].substring(0, j++);
  }

  if (isDeleting && j >= 0) {
    current = roles[i].substring(0, j--);
  }

  element.innerText = current;

  if (j === roles[i].length) isDeleting = true;
  if (j === 0 && isDeleting) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(type, 120);
}

type();
