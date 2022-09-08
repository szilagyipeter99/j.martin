const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.navbar-list');


menuButton.addEventListener('click', showMenu);


function showMenu() {
  menu.classList.toggle("responsive-active");
  menuButton.classList.toggle("menu-button-active");
}


document.querySelector('.references .gallery-bullets').addEventListener('click', scrollGallery);

let galleryWidth = 5*200;

function scrollGallery() {

  if (event.target.className == 'bullet') {
    let allBullets = document.querySelectorAll('.references .gallery-bullets .bullet');

    for (let i = 0; i < allBullets.length; i++) {
      allBullets[i].style.background = "white";
      allBullets[i].className = "bullet";
    }


    let index = Array.from(event.target.parentElement.children).indexOf(event.target);


    document.querySelector('.references .references-gallery').style['margin-left'] = `${index * - galleryWidth}px`;
    event.target.className = "bullet active";
    event.target.style.background = "grey";

  }

}


const modal = document.getElementById('modalWrap');

function showInModal(e) {
  modal.style.display = 'block';
  modal.querySelector("img").setAttribute('src', e.getAttribute('src'));
}

function hideModal() {
  modal.style.display = 'none';
}


document.getElementById("kapcsolatBtn").onclick = function () {
        location.href = "kapcsolat";
    };
