ymaps.ready(init);
function init(){
    var myMap = new ymaps.Map("map", {
        center: [59.938635, 30.323118],
        zoom: 17
    });
}

const toggleBtn = document.querySelector('.main-nav-toggle');
const nav = document.querySelector('.main-nav');

toggleBtn.classList.remove('hidden');
nav.classList.remove('active');

toggleBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  toggleBtn.classList.toggle('active');
});
