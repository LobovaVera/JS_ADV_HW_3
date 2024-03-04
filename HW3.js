// Создайте интерактивную веб-страницу для оставления и просмотра отзывов о продуктах. Пользователи могут добавлять отзывы о различных продуктах и просматривать добавленные отзывы.

// Страница добавления отзыва:

// Поле для ввода названия продукта.
// Текстовое поле для самого отзыва.
// Кнопка "Добавить отзыв", которая сохраняет отзыв о продукте в LocalStorage.

// Страница просмотра отзывов:

// Показывает список всех продуктов, о которых были оставлены отзывы.
// При клике на название продукта отображается список всех отзывов по этому продукту.
// Возможность удаления отзыва (при нажатии на кнопку "Удалить" рядом с отзывом, данный отзыв удаляется из LocalStorage).

const productInput = document.querySelector(".product-input");

const reviewInput = document.querySelector(".review-input");

const addReviewBtn = document.querySelector(".addReview-btn");

const showReviews = document.querySelector(".show-reviews");

const showReviewsBtn = document.querySelector(".loadReview-btn");

const gotoLoadReviewsBtn = document.querySelector(".goto-loadReviews-btn");


if (addReviewBtn) {

    addReviewBtn.addEventListener("click", () => {
        if (localStorage.getItem("reviewList")) {
            console.log('reviewList get true');
            let reviewList = [];
            let temp = JSON.parse(localStorage.getItem("reviewList"));
            if (Symbol.iterator in Object(temp)){
        temp.forEach(element => {
            reviewList.push(element);
        });
        console.log(reviewList);
        reviewList.push({ product: productInput.value, review: reviewInput.value, });
        localStorage.setItem("reviewList", JSON.stringify(reviewList));
            }else {
                let reviewList = [];
                reviewList.push(temp);
                reviewList.push({ product: productInput.value, review: reviewInput.value, });
                localStorage.setItem("reviewList", JSON.stringify(reviewList));
            }
} else {
    console.log('reviewList get false');
    const reviewList = ({ product: productInput.value, review: reviewInput.value, });
    localStorage.setItem("reviewList", JSON.stringify(reviewList));
}

   });
}


if (gotoLoadReviewsBtn) {
    gotoLoadReviewsBtn.addEventListener("click", () => {
        window.location.href = "loadReview.html";
     
    });
}

if(showReviewsBtn){
    showReviewsBtn.addEventListener('click', () => {
       showReviews.innerHTML = '';
        if(localStorage.getItem('reviewList')){
        let reviewList = JSON.parse(localStorage.getItem("reviewList"));
        console.log(typeof(reviewList));
        if (typeof(reviewList) == "object"){
            createLiBtn(reviewList);
        } else {
        for (const item of reviewList) {
                createLiBtn(item);
            }
        }
    }
    });
}
function createLiBtn(item){
    let itemLi= document.createElement('li');
    let itemBtn = document.createElement('button');
    itemBtn.innerHTML = 'Удалить отзыв';
    itemBtn.onclick = function(){
       console.log('itemBtn');
       deleteSelectedReview(item);
        }
    itemLi.innerHTML = `${item.product} <br> ${item.review}`;           
    showReviews.appendChild(itemLi);
    showReviews.appendChild(itemBtn);
}

function deleteSelectedReview(review){
    if(localStorage.getItem('reviewList')){
        let newList = [];
        let reviewList = JSON.parse(localStorage.getItem("reviewList"));
        console.log(review);
        if(Symbol.iterator in Object(reviewList)){
        for (const el of reviewList) {
            if(JSON.stringify(el) !== JSON.stringify(review)){
                newList.push(el);
            }
        }
        localStorage.setItem("reviewList", JSON.stringify(newList));
    }else {
        localStorage.clear();
        showReviews.innerHTML = '';
    }
    }
}

