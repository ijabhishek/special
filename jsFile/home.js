document.addEventListener("DOMContentLoaded", function () {
    const homeNav = document.getElementById("homeNav");
    const olderNav = document.getElementById("olderNav");
    const todaySurprise = document.getElementById("todaySurprise");
    const olderSurprises = document.getElementById("olderSurprises");

    homeNav.addEventListener("click", function () {
        homeNav.classList.add("active");
        olderNav.classList.remove("active");
        todaySurprise.classList.remove("hidden");
        olderSurprises.classList.add("hidden");
    });

    olderNav.addEventListener("click", function () {
        homeNav.classList.remove("active");
        olderNav.classList.add("active");
        todaySurprise.classList.add("hidden");
        olderSurprises.classList.remove("hidden");
    });
});
document.addEventListener("DOMContentLoaded", function () {
    var popup = document.querySelector(".popup");
    var closeBtn = document.querySelector(".close-btn");

    // Show the popup
    popup.style.display = "block";

    // Close the popup after 4 seconds
    setTimeout(function () {
        closePopup();
    }, 4000);

    // Function to close the popup
    function closePopup() {
        popup.style.opacity = "0";
        setTimeout(function () {
            popup.style.display = "none";
        }, 500);
    }

    // Close the popup when the close button is clicked
    closeBtn.addEventListener("click", function () {
        closePopup();
    });
});
var nav = document.createElement("nav");

var ul = document.createElement("ul");
nav.appendChild(ul);

var links = [
    { label: "Home", href: "#" },
    { label: "About", href: "about.html" },
    { label: "Contact", href: "contact.html" },
    { label: "Projects", href: "projects.html" }
];

for (var i = 0; i < links.length; i++) {
    var li = document.createElement("li");
    ul.appendChild(li);

    var a = document.createElement("a");
    a.textContent = links[i].label;
    a.href = links[i].href;
    li.appendChild(a);

    a.addEventListener("click", function (event) {
        event.preventDefault(); // Prevent default link behavior
        window.open(this.getAttribute("href")); // Open link in a new window/tab
    });
}
