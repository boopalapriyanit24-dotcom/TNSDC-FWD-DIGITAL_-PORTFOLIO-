// Typing Effect for Name

const text = "Boopala Priyan";

let index = 0;

function type() {

  if (index < text.length) {

    document.getElementById("typing").innerHTML += text.charAt(index);

    index++;

    setTimeout(type, 150);

  }

}

window.onload = type;

// Scroll Reveal Effect

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {

  const trigger = window.innerHeight / 1.2;

  sections.forEach(sec => {

    const top = sec.getBoundingClientRect().top;

    if (top < trigger) {

      sec.classList.add("show");

    }

  });

});