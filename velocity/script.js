//Tabs

const tabsBtns = document.querySelectorAll(".tabs__buttons button");
const tabsItems = document.querySelectorAll(".tabs__item");


// Ф-я скрывает табы и убирает активность кнопки
function hideTabsActive() {
  tabsItems.forEach(item => item.classList.add("hide"));
  tabsBtns.forEach(item => item.classList.remove("active"));
}

// Ф-я показывает номер таба и делает кнопку активной
function showTabsActive(index) {
  tabsItems[index].classList.remove("hide");
  tabsBtns[index].classList.add("active");
}

hideTabsActive();
showTabsActive(0);

tabsBtns.forEach((btn, index) => btn.addEventListener("click", () => {
  hideTabsActive();
  showTabsActive(index);
}));


//Anchors

const anchors = document.querySelectorAll(".header__nav a");

anchors.forEach(item => item.addEventListener("click", function(event) {
  event.preventDefault();

  const id = item.getAttribute("href");
  const elem = document.querySelector(id);
  
  window.scroll({
    top: elem.offsetTop - 80,
    behavior: 'smooth'
  });
}));