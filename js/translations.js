// const languageSelector = document.getElementById('language-selector');
// const bodyElement = document.body;

// languageSelector.addEventListener('change', function () {
//     const selectedLanguage = languageSelector.value;
//     bodyElement.setAttribute('lang', selectedLanguage);
// });
// var div = document.createElement('div').innerHTML = 'hey';
// document.body.appendChild(div);

// Создайте объект с переводами для каждого языка

// export default translations;

const translations = {
    'ru': {
        'title': 'Геннадий Ельцов',
        'name': 'Геннадий Ельцов',
        'home':'',
        // 'about': 'Обо мне',
        // 'portfolio': 'Портфолио',
        // 'contact': 'Контакты',
        'copyright': '&copy; 2023 Геннадий Ельцов'
        // Добавьте остальные переводы
    },
    'en': {
        'title': 'Gennady Eltsov',
        'name': 'Gennady Eltsov',
        'home':'Home',
        // 'about': 'About me',
        // 'portfolio': 'Portfolio',
        // 'contact': 'Contact',
        'copyright': '&copy; 2023 Gennady Eltsov'
        // Add other translations
    }
    // Добавьте другие языки, если необходимо
};



// Получите элементы, которые вы хотите изменить
const titleElement = document.querySelector('#title');
const nameElement = document.querySelector('#name');
const homeElement = document.querySelector('#home');
// const aboutHeadingElement = document.querySelector('#about h2');
// const portfolioHeadingElement = document.querySelector('#portfolio h2');
// const contactHeadingElement = document.querySelector('#contact h2');
const copyrightElement = document.querySelector('footer p');

// Обработчик смены языка
document.getElementById('language-selector').addEventListener('change', function () {

    // console.log('Language changed to:', this.value);

    const selectedLanguage = this.value;

    // Примените переводы для выбранного языка
    titleElement.textContent = translations[selectedLanguage]['title'];
    nameElement.textContent = translations[selectedLanguage]['name'];
    homeElement.textContent = translations[selectedLanguage]['home'];
    // aboutHeadingElement.textContent = translations[selectedLanguage]['about'];
    // portfolioHeadingElement.textContent = translations[selectedLanguage]['portfolio'];
    // contactHeadingElement.textContent = translations[selectedLanguage]['contact'];
    copyrightElement.innerHTML = translations[selectedLanguage]['copyright'];

    // Здесь вы также можете добавить логику для изменения шрифта в зависимости от языка
});
