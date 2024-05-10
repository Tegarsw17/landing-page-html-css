const hamburger = document.querySelector('.hamburger')
const listNav = document.querySelector('.list-navbar')

hamburger.addEventListener('click', () => {
  //   hamburger.classList.toggle('active')
  listNav.classList.toggle('active')
})

document.querySelectorAll('.list-page').forEach((n) =>
  n.addEventListener('click', () => {
    // hamburger.classList.remove('active')
    listNav.classList.remove('active')
  })
)
