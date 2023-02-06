// var burgerBar = document.querySelector('.burger');
// var listName = document.querySelector('.list-android');

// var open = false;

// burgerBar.addEventListener('click', function () {
//   open = !open;
//   if (open) {
//     listName.style.display = 'none';
//   } else {
//     listName.style.display = 'block';
//   }
// });
const navbarNav = document.querySelector('.navbar-nav');

document.querySelector('#burger').onclick = () => {
  navbarNav.classList.toggle('active');
};

const menu = document.querySelector('.burger');

document.addEventListener('click', function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove('active');
  }
});
