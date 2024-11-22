// Функція сповіщення після натискання на кнопку оплати
document.getElementById("pay-button").addEventListener("click", function() {
    alert("Ви будете перенаправлені на форму оплати Monobank. Не забудьте вказати свій Minecraft нікнейм в коментарі!");
});

// Функція для відкриття та закриття меню
function toggleNav() {
    var sideNav = document.getElementById("side-nav");
    if (sideNav.style.width === "250px") {
        sideNav.style.width = "0";
    } else {
        sideNav.style.width = "250px";
    }
}