var burgerBar = document.querySelector('.burger');
var listName = document.querySelector('.list-android');

var open = false;

burgerBar.addEventListener('click', function () {
  open = !open;
  if (open) {
    listName.style.display = 'none';
  } else {
    listName.style.display = 'block';
  }
});
