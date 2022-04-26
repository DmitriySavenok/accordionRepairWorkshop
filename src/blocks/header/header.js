let body = document.querySelector('#body');
let header = document.querySelector('#header');
let navigation = document.querySelector("#header__navigation");
let navigationList = document.querySelector(".header__navigation-list");
let headerSocialLink = document.querySelector(".header__social-icons-link");
let button = document.querySelector("#navigation-toggle");
let burderIcon = document.querySelector(".menu-icon");
let closeIcon = document.querySelector(".close-icon");

$(document).ready(function() {
  jQuery(".scrollto").click(function () {
  elementClick = jQuery(this).attr("href")

  navigationClose();

  destination = jQuery(elementClick).offset().top - 70;
  jQuery("html:not(:animated),body:not(:animated)").animate({scrollTop: destination}, 1000);
  return false;
  });
});

function navigationClose() {
  button.classList.remove('opened');
  burderIcon.classList.remove('icon-hide');
  closeIcon.classList.add('icon-hide');
  navigation.classList.remove('navigation-opened');
  navigationList.classList.remove('header__navigation-list-view');
  body.classList.remove('noscroll');
}

function navigationToggle() {
  button.classList.toggle('opened');
  burderIcon.classList.toggle('icon-hide');
  closeIcon.classList.toggle('icon-hide');
  navigation.classList.toggle('navigation-opened');
  navigationList.classList.toggle('header__navigation-list-view');
  body.classList.toggle('noscroll');

  if (button.classList.contains('opened') == true) {
    document.addEventListener( 'click', (e) => {
      const withinBoundaries = e.composedPath().includes(header);
      if ( ! withinBoundaries ) {
        navigationClose();
      }
    })
  }

  document.addEventListener('keydown', function(e) {
    if( e.keyCode == 27 ) { // код клавиши Escape, но можно использовать e.key
      navigationClose();
    }
  });
}
