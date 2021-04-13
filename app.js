var navBar = document.getElementById("navbar-toggle");
var toggleMenu = document.getElementById("toggleMenuBar");
toggleMenu.addEventListener("click", topNavBar);

function topNavBar() {
    if (navBar.className === "navbar") {
        navBar.className += " open";
        toggleMenu.innerHTML = "&times;";
    } else {
        navBar.className = "navbar";
        toggleMenu.innerHTML = "&#9776";
    }
}