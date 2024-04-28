
document.querySelectorAll('[id^="openMenuButton"]').forEach(function (button) {
    button.addEventListener("click", function () {
        var id = this.id.replace("openMenuButton", "");
        document.getElementById("overlay" + id).style.display = "block";
        document.getElementById("menu" + id).style.display = "block";
    });
});


document.querySelectorAll('[id^="closeMenuButton"]').forEach(function (button) {
    button.addEventListener("click", function () {
        var id = this.id.replace("closeMenuButton", "");
        document.getElementById("overlay" + id).style.display = "none";
        document.getElementById("menu" + id).style.display = "none";
    });
});


document.querySelectorAll('[id^="overlay"]').forEach(function (overlay) {
    overlay.addEventListener("click", function () {
        var id = this.id.replace("overlay", "");
        document.getElementById("overlay" + id).style.display = "none";
        document.getElementById("menu" + id).style.display = "none";
    });
});