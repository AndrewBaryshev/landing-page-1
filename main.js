const openBtn = document.querySelector(".header__burger-container")
const closeBtn = document.querySelector(".header__close-menu")

const showMenu = document.querySelector(".header__opened-menu")

openBtn.addEventListener("click", () => {
  showMenu.style.display = 'block'
})

closeBtn.addEventListener("click", () => {
  showMenu.style.display = 'none'
})
