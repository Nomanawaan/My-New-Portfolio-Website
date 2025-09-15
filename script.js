// js for header arrow
const aerobtn = document.querySelector('.aero');
const aeroicon = document.getElementById('aero-right');

aerobtn.addEventListener('mouseenter', () => {
    aeroicon.style.transform = "rotate(90deg)";
    aeroicon.style.transition = "transform 0.3s ease";
});

aerobtn.addEventListener('mouseleave', () => {
    aeroicon.style.transform = "rotate(45deg)";
});


// js for hero sec right arrow
const icons = document.querySelectorAll('#icon');

icons.forEach(iconBox => {
  const icon = iconBox.querySelector('i');

  iconBox.addEventListener('mouseenter', () => {
    icon.style.transition = "transform 0.3s ease";
    icon.style.transform = "rotate(45deg)";
  });

  iconBox.addEventListener('mouseleave', () => {
    icon.style.transform = "rotate(0deg)";
  });
});


// js for hero sec right arrow
const arrowIcons = document.querySelectorAll('.aero-rotate');

arrowIcons.forEach(icon => {

    const parentBox = icon.parentElement;

    parentBox.addEventListener('mouseenter', () => {
        icon.style.transition = "transform 0.3s ease";
        icon.style.transform = "rotate(90deg)";
    });

    parentBox.addEventListener('mouseleave', () => {
        icon.style.transform = "rotate(45deg)";
    });
});


// js for all buttons with class "ara-btn-aero"
const arrowBoxes = document.querySelectorAll('.ara-btn-aero');

arrowBoxes.forEach(box => {
  const arrowIcon = box.querySelector('.ara-aero');

  box.addEventListener('mouseenter', () => {
    arrowIcon.style.transition = "transform 0.3s ease";
    arrowIcon.style.transform = "rotate(45deg)";
  });

  box.addEventListener('mouseleave', () => {
    arrowIcon.style.transform = "rotate(0deg)";
  });
});

// js for hamburger menu
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".header-center");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});


