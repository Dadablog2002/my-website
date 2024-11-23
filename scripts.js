// Функція сповіщення після натискання на кнопку оплати
document.getElementById("pay-button").addEventListener("click", function() {
    alert("Ви будете перенаправлені на форму оплати Monobank. Не забудьте вказати свій Minecraft нікнейм в коментарі!");
});

// Функція для копіювання IP адреси в буфер обміну
function copyIP() {
    // Отримуємо елемент з IP адресою
    var ipText = document.getElementById("server-ip");

    // Створюємо тимчасовий input для копіювання
    var tempInput = document.createElement("input");
    tempInput.value = ipText.textContent; // Встановлюємо значення в input

    // Додаємо цей input до документа
    document.body.appendChild(tempInput);

    // Виділяємо текст в input
    tempInput.select();
    tempInput.setSelectionRange(0, 99999); // Для мобільних пристроїв

    // Копіюємо текст в буфер обміну
    document.execCommand("copy");

    // Видаляємо тимчасовий input
    document.body.removeChild(tempInput);

    // Показуємо сповіщення (опційно)
    alert("IP адреса скопійована в буфер обміну!");
}
