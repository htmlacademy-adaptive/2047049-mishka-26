let userList = document.querySelector('.user-list--closed');
let siteList = document.querySelector('.site-list--closed');
let navToggle = document.querySelector('.main-navigation__toggle');


navToggle.addEventListener('click', function () {
  if (userList.classList.contains('user-list--closed')) {
    userList.classList.remove('user-list--closed');
    userList.classList.add('user-list');
  } else {
    userList.classList.add('user-list--closed');
    userList.classList.remove('user-list');
  }
});

navToggle.addEventListener('click', function () {
  if (siteList.classList.contains('site-list--closed')) {
    siteList.classList.remove('site-list--closed');
    siteList.classList.add('site-list');
  } else {
    siteList.classList.add('site-list--closed');
    siteList.classList.remove('site-list');
  }
});
