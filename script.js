let listContainer = document.querySelector('.page__restaurants');
fetch('restaurants.json')
    .then(res => res.json())
    .then((data) => {
        const restaurants = data.restaurants;
        restaurants.forEach((item) => {
            let block = createItem(item);
            listContainer.append(block);
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
