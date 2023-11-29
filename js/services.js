
import { headerTemplate } from "./templates.js";

export function getHeaderTemplate() {
    document.addEventListener('DOMContentLoaded', function () {
        // Создаем временный контейнер и вставляем в него шаблон
        var templateContainer = document.createElement("div");
        templateContainer.innerHTML = headerTemplate;

        // Вставляем вверх страницы перед первым элементом в body
        document.body.insertBefore(templateContainer.firstChild, document.body.firstChild);
    });
}

