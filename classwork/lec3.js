
// var promise = new Promise(function(resolve, reject) {
//     // Эта функция будет вызвана автоматически

//     // В ней можно делать любые асинхронные операции,
//     // А когда они завершатся — нужно вызвать одно из:
//     // resolve(результат) при успешном выполнении
// //     // reject(ошибка) при ошибке
// //   })
// // promise.then(onFulfilled, onRejected)
// // onFulfilled сработает при успешном выполнении
// promise.then(onFulfilled)
// // onRejected сработает при ошибке
// promise.then(null, onRejected)

// let promise = new Promise(function(resolve, reject){
//     setTimeout(() => 
//     Math.random()*2 < 1
//     ? resolve("done")
//     : reject(new Error("err")), 1000);
// });
// promise.catch(alert);


// catch
// finallyfinally() выполнится тогда, когда завершится
// ожидание (статус pending) у промиса. 
//Promise.all([array of promises]).then(cl).catch(cl)
//Promise.race() берёт из массива промисов первый выполнившийся (по
//скорости) промис и возвращает его результат. 
//Promise.any() ждёт результат первого успешно выполнившегося промиса, остальные
//игнорируется.
// console.log(document.cookie);
// document.cookie = "kooki";
// console.log(document.cookie);
// let setCookie = (name, value, days) => {
//     let expirationDate = new Date();
//     expirationDate.setDate(expirationDate.getDate() + days);

//     let cookieValue = encodeURIComponent(value) + '; expires' + expirationDate.toUTCString();
//     document.cookie = name + '=' + cookieValue;
// }
// setCookie('username', "Vasya", 7);
// setCookie('user2', 'name2', 12);

// let getCookie = (name) => {
//     let cookies = document.cookie.split(';');
//     for (let cookie of cookies) {
//         let [cookieName, cookieValue] = cookie.trim().split('=');
//         if (cookieName === name) {
//             return decodeURIComponent(cookieValue);
//         }
//     }
//     return null;
// }

// let username = getCookie('username');
// console.log(username);

// let deleteCookie = (name) => {
//     document.cookie = name + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
// }
//LocalStorage Session Storage
// Методы у LocalStorage и SessionStorage одинаковы.
// ● setItem(ключ, значение) — сохранить элемент с ключом «ключ» и данными
// «значение».
// ● getItem(ключ) — получить значение по ключу.
// ● removeItem(ключ) — удалить пару «ключ» и «значение» по заданному ключу.
// ● key(номер позиции) — получить ключ на заданной позиции.
// ● length — количество элементов в хранилище.
// ● clear() — очистка хранилища.
//. Очистить данные можно в настройках
//браузера или специальной командой clear(), э
// console.log(localStorage);
// localStorage.setItem('dog','pet');
// localStorage.setItem('cat','pet');
// console.log(localStorage);
// const keys = Object.keys(localStorage);
// for (let i=0; i<localStorage.length; i++) {
//     console.log(keys[i]); 
// }

// // let vasyaStorage = localStorage.getItem()

// if (localStorage.getItem('counter')){
//     let counter = parseInt(localStorage.getItem('counter')) + 1;
//     localStorage.setItem('counter', counter.toString());
// } else{
//     localStorage.setItem('counter', 1);
// }

// console.log('counter: ' + localStorage.getItem('counter'));
//localStorage.clear();
// let counter;

//     if (localStorage.getItem('counter')) {
//         counter = parseInt(localStorage.getItem('counter'));
//     } else {
//         localStorage.setItem('counter', 0);
//         counter = 0;
//     }
// let counter = localStorage.getItem('counter') ? parseInt(localStorage.getItem('counter')) : 0;
// document.querySelector('.counter').textContent = counter;

// const updateCounter = () => {
//     counter++;
//     localStorage.setItem('counter', counter.toString());

// };


// document.querySelector('.increment').addEventListener('click', () => {
//     updateCounter();
//     document.querySelector('.counter').textContent = counter;
// });
// <!-- <button class="increment" >Increment</button>
// <button class="counter">+</button> -->
// <input type="text" id="item-input" placeholder="enter text">
// <button id="add-button">add</button>
// <ul id="item-list"></ul>

// <!-- <script src="lec3.js"></script> -->
// <script>
//     const inputField = document.getElementById('item-input');
//     const addButton = document.getElementById('add-button');
//     const itemList = document.getElementById('item-list');

//     let shoppingList = JSON.parse(localStorage.getItem('shoppingList')) || [];

//     const updateShoppingList = () => {
//         itemList.innerHTML = '';
//         shoppingList.forEach((item) => {
//             const listItem = document.createElement('li');
//             listItem.textContent = item;
//             itemList.append(listItem);
//         });

//         localStorage.setItem('shoppingList', JSON.stringify(shoppingList));
//     };

//     addButton.addEventListener('click', () => {
//         const newItem = inputField.value.trim();

//         if (newItem !== '') {
//             shoppingList.push(newItem);
//             inputField.value = '';
//             updateShoppingList();
//         }
//     });

//     updateShoppingList();
// </script>

function* numberGenerator(){
    let number = 1; 
     while (true){
        yield number;
        number++;
     }
}

const generator = numberGenerator();
 console.log(generator.next().value);
 console.log(generator.next().value);
 console.log(generator.next().value);
 console.log(generator.next().value);
 console.log(generator.next().value);
 console.log(generator.next().value);
 console.log(generator.next().value);
 console.log(generator.next().value);