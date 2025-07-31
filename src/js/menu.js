const sideNav = document.querySelector(".sideNav")
const overlay = document.querySelector(".overlay")
const topNav = document.getElementById("topNav")


let scrollPositionBefore = window.scrollY

window.addEventListener("scroll", function() {

    let nowScroll = this.window.scrollY

    if (nowScroll > scrollPositionBefore) {

        topNav.style.top = "-50px"

    } else {
        topNav.style.top = "0"
    }


    scrollPositionBefore = nowScroll
})

function bukaMenu() {
    document.getElementById("hamburger").classList.toggle("active")
    sideNav.classList.toggle("show");
    overlay.classList.toggle("show");

}

function quickNav() {

    setTimeout(()=> {
        topNav.style.top = "0"
    },700)

    console.log(window.scrollY)

}


function aboutGui() {

    document.getElementById("aboutMobGui").classList.toggle("show")
}

function closeGui() {
    document.getElementById("aboutMobGui").classList.toggle("show")
}