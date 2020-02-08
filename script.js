let listContainer = document.querySelector('.page__restaurants');
let ascBtn = document.querySelector('.btn__asc');
let descBtn = document.querySelector('.btn__desc');
fetch('restaurants.json')
    .then(res => res.json())
    .then((data) => {
        const restaurants = data.restaurants;
        renderList(restaurants);
        ascBtn.addEventListener('click', () => {
            let sortedArr = sortAsc(restaurants);
            clearContainer();
            renderList(sortedArr);
        })
        descBtn.addEventListener('click', () => {
            let sortedArr = sortDesc(restaurants);
            clearContainer();
            renderList(sortedArr);
        })
    });

const createItem = (item) => {
    let itemBlock = createElement('div', 'page__item');
    let imageWrapper = createElement('div', 'item__picture-wrapper');
    let itemPic = createElement('img', 'item__image');
    let itemTitle = createElement('div', 'item__title');
    itemTitle.textContent = item.name;
    itemPic.setAttribute('src', item.image);
    imageWrapper.append(itemPic);
    itemBlock.append(imageWrapper, itemTitle);
    return itemBlock
};

const createElement = (el, className) => {
    let element = document.createElement(el);
    element.classList.add(className);
    return element
};

const renderList = (arr) => {
    arr.forEach((item) => {
        let block = createItem(item);
        listContainer.append(block);
    })
};

const clearContainer = () => {
    let listContainer = document.querySelector('.page__restaurants');
    listContainer.innerHTML = '';
};

const sortAsc = (arr) => {
    let sortedArr = arr.sort(function(a, b){
        if(a.name < b.name) {
            return -1;
        }
    });
    return sortedArr
};

const sortDesc = (arr) => {
    let sortedArr = arr.sort(function(a, b) {
        if(a.name > b.name) {
            return -1;
        }
    })
    return sortedArr;
}