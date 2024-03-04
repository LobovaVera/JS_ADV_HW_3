// Вы разрабатываете прототип веб-приложения для чтения новостей. Статьи "хранятся" во внутреннем массиве (имитируя базу данных). Когда пользователь нажимает на кнопку "Загрузить новости", ваш код должен имитировать задержку, словно происходит реальная загрузка данных из внешнего источника, а после этой задержки — отображать новости на странице.

// 1. Создайте базовую HTML-структуру с кнопкой для загрузки новостей и контейнером для их отображения.


// 4. При успешной загрузке отобразите статьи на странице. При ошибке покажите сообщение об ошибке.
// 5. Добавьте функционал, который отключает кнопку загрузки на время "загрузки" новостей и активирует её снова после завершения операции (будь то успешная загрузка или ошибка).
// const mockDatabase = [
//     { title: "Новость 1", content: "Содержимое новости 1..." },
//     { title: "Новость 2", content: "Содержимое новости 2..." }
// ];

// const loadButton = document.querySelector('.load-button');

// const newsContainer = document.querySelector('.news-container');

// // 2. Реализуйте функцию fetchNews(), возвращающую промис. Эта функция должна имитировать задержку в 2 секунды перед успешным возвращением данных из "виртуальной" базы данных. Для добавления интереса: с вероятностью 10% она должна возвращать ошибку вместо данных.
// function fetchNews() {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {

//             if (Math.random() > 0.1) {
//                 resolve(mockDatabase);
//             } else {
//                 reject("load error");
//             }

//         }, 2000)
//     })
// }
// 3. При нажатии на кнопку "Загрузить новости" вызывайте функцию fetchNews(), обрабатывая успешное выполнение и ошибки с использованием then() и catch().
// 4. При успешной загрузке отобразите статьи на странице. При ошибке покажите сообщение об ошибке.
// 5. Добавьте функционал, который отключает кнопку загрузки на время "загрузки" новостей и активирует её снова после завершения операции (будь то успешная загрузка или ошибка).

// loadButton.addEventListener('click', () => {

//     loadButton.disabled = true;
//     fetchNews()
//         .then((result) => {
//             result.forEach(news => {

//                 let childNews = document.createElement('li');
//                 childNews.innerHTML = `<h2>${news.title}</h2><br><p>${news.content}</p>`;
//                 newsContainer.appendChild(childNews);
//             });
//         })
//         .catch((err) => {
//             newsContainer.innerHTML = `<h2>${err}</h2>`
//         })
//         .finally(() => loadButton.disabled = false);
// }
// );
// Создать интерактивную веб-страницу, где пользователи могут выбирать различные элементы мебели
// (например, столы, стулья, диваны) и их параметры (материал, цвет, стиль). Выбранные параметры должны
// быть сохранены так, чтобы при повторном посещении сайта пользователь мог видеть свой ранее собранный
// комплект мебели.
// 1. Пользователи могут выбирать из различных типов мебели (например, столы, стулья, диваны).
// 2. Для каждого типа мебели доступен выбор параметров (цвет, материал, стиль).
// 3. Предусмотреть кнопку "Сохранить комплект", при нажатии на которую текущий выбор пользователя
// сохраняется в localStorage.
// 4. При повторном посещении сайта автоматически загружать сохраненные параметры из localStorage и
// отображать ранее созданный комплект.
// 5. Предусмотреть возможность для пользователя очистить сохраненные настройки через специальную
// кнопку.
// 6. После нажатия на кнопку "Сохранить" на странице должен отображаться выбранный комплект.
// 7. При нажатии на кнопку "Очистить" должно появляться сообщение о том, что выбор не сделан и
// предыдущие настройки удалены

// const saveBtn = document.querySelector('#save-btn');
// const loadBtn = document.querySelector('#load-btn');
// const clearBtn = document.querySelector('#clear-btn');

// saveBtn.addEventListener('click', saveCookies);
// function saveCookies() {
//     const tableColor = document.querySelector('#table-color').value;
//     const chairMaterial = document.querySelector('#chair-material').value;
//     Cookies.set("tableColor", tableColor, {expires: 365});
//     Cookies.set("chairMaterial", chairMaterial, {expires: 365});
// }

// loadBtn.addEventListener('click', loadCookies);
// function loadCookies() {
//     const tableColor = Cookies.get("tableColor");
//     const chairMaterial = Cookies.get("chairMaterial");
//     if(tableColor){
//         console.log("chm1");
//         document.querySelector('#table-color').value = tableColor;
//     }
//     if(chairMaterial){
//         console.log("chm");
//         document.querySelector('#chair-material').value = chairMaterial;
//     }
// }
// clearBtn.addEventListener('click', removeCookies);
// function removeCookies(){
//     Cookies.remove("tableColor");
//     Cookies.remove("chairMaterial");
//     alert("Cookies have been removed");
// }

// Создать интерактивную веб-страницу, которая позволяет пользователям регистрироваться и входить в систему, используя данные, сохраненные в LocalStorage.

// Приложение будет состоять из трёх основных страниц:

// 1. Страница регистрации:
// 1. Предлагает пользователю ввести логин и пароль.
// 2. После ввода данных, они сохраняются в LocalStorage.
// 3. Пользователь перенаправляется на страницу входа.
// 2. Страница входа:
// 1. Предлагает пользователю ввести логин и пароль.
// 2. Если введенные данные совпадают с данными из LocalStorage, пользователь перенаправляется на страницу приветствия.
// 3. Если данные не совпадают, выводится сообщение об ошибке.
// 3. Страница приветствия:
// 1. Простое приветственное сообщение для авторизованного пользователя.
// 2. Кнопка "Выйти", при нажатии на которую пользователь возвращается на страницу входа.


const userInput = document.querySelector('.username-input');
const passwordInput = document.querySelector('.password-input');
const registerBtn = document.querySelector('.register-btn');
const registerLink = document.querySelector('.register-link');
const errorMessage = document.querySelector('.error-message');
const loginBtn = document.querySelector('.login-btn');
const logoutBtn = document.querySelector('.logout-btn');

function userRegister() {
    localStorage.setItem('userName', userInput.value);
    localStorage.setItem('password', passwordInput.value);
    window.location.href = 'login.html';
}

function userLogin() {
    const userName = localStorage.getItem('userName');
    const password = localStorage.getItem('password');
    if (userName === userInput.value && password === passwordInput.value) {
        window.location.href = "hello.html";
    } else {
        errorMessage.textContent = "login err";
    }
}
if(registerBtn){
 registerBtn.addEventListener('click', userRegister);   
};


if (registerLink) {
    registerLink.addEventListener('click', () => {
        window.location.href = 'register.html';
    })

}

if (loginBtn) {
    loginBtn.addEventListener('click', userLogin);
}
if(logoutBtn){
 logoutBtn.addEventListener('click', () => {
    window.location.href = 'login.html';
 });
}