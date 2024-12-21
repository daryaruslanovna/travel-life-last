document.querySelector(".burger").addEventListener("click", (e) => {
    console.log(e.target)
    e.target.classList.toggle("active")
    document.querySelector(".mobile-menu").classList.toggle("active")
    document.querySelector("body").classList.toggle("lock")
    document.querySelector("html").classList.toggle("lock")
})

