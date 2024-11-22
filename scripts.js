// Функція сповіщення після натискання на кнопку оплати
document.getElementById("pay-button").addEventListener("click", function() {
    alert("Ви будете перенаправлені на форму оплати Monobank. Не забудьте вказати свій Minecraft нікнейм в коментарі!");
});

// Функція для копіювання тексту в буфер
function copyToClipboard() {
    // Знайдемо елемент, що містить IP адресу
    var copyText = document.getElementById("server-ip").querySelector("span");

    // Створимо тимчасовий input для копіювання
    var tempInput = document.createElement("input");
    document.body.appendChild(tempInput);
    tempInput.value = copyText.textContent;  // Запишемо в input текст
    tempInput.select();  // Виділяємо текст
    document.execCommand("copy");  // Копіюємо текст в буфер обміну
    document.body.removeChild(tempInput);  // Видаляємо тимчасовий input

    // Показуємо сповіщення
    alert("IP адреса скопійована в буфер обміну!");
}