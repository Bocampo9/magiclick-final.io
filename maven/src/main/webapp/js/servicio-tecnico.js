
function initMenuToggle() {
  $('.menu-icon-oculto').on('click', function() {
    $('nav').slideToggle();
  });
}

const enlaces = document.querySelectorAll('.a-nav-dos');

enlaces.forEach((enlace) => {
  enlace.addEventListener('mouseover', () => {
    enlace.style.color = '#FFA726'; /* Changes color on mouseover */
  });

  enlace.addEventListener('mouseout', () => {
    enlace.style.color = '#000000'; /* Resets color on mouseout */
  });
});