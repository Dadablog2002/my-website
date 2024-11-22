// Функція сповіщення після натискання на кнопку оплати
document.getElementById("pay-button").addEventListener("click", function() {
    alert("Ви будете перенаправлені на форму оплати Monobank. Не забудьте вказати свій Minecraft нікнейм в коментарі!");
});

// Функція для відкриття та закриття випадаючого меню (можна додати для мобільних пристроїв)
document.querySelector('.dropdown').addEventListener('click', function() {
    const dropdownContent = document.querySelector('.dropdown-content');
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
});

