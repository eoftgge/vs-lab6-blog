document.addEventListener('DOMContentLoaded', () => {
    const yearSpan = document.getElementById('current-year-post') || document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
    const commentForm = document.getElementById('comment-form');

    if (commentForm) {
        commentForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const nameInput = document.getElementById('username');
            const messageInput = document.getElementById('comment-text');

            const nameValue = nameInput.value;
            const messageValue = messageInput.value;

            // имитация оптравки на бекенд
            console.log("--- Отправка комментария на сервер ---");
            console.log("Имя пользователя:", nameValue);
            console.log("Текст сообщения:", messageValue);
            console.log("Время отправки:", new Date().toLocaleTimeString());

            alert(`Спасибо, ${nameValue}! Ваш комментарий отправлен (см. консоль F12).`);
            commentForm.reset();
        });
    }
});
