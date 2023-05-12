const changeShopBorder = () => {
    const shops = document.querySelectorAll('.shops');

    if(shops.length == 0) return;

    shops.forEach(elem => {
        const items = elem.querySelectorAll('.js--shop-item');
        if(items.length == 0) return;

        changeBottomBorder(items);

        window.addEventListener('resize', function(event) {
            changeBottomBorder(items);
        }, true);
    });

}

const changeBottomBorder = (items) => {
    items.forEach(elem => {
        elem.style.borderBottom = '1px solid #DBDBDB'
    })
    if(window.innerWidth >= 1280)
        removeBorder(items, 4);
    else if(window.innerWidth >= 991)
        removeBorder(items, 3);
    else
        removeBorder(items, 2);
}

const removeBorder = (items, count) => {
    if (items.length % count == 0)
        for(let i = items.length - 1; i >= items.length - count; i--) {
            items[i].style.borderBottom = 'none'
        }
     else
        for(let i = items.length - 1; i >= items.length - (items.length % count); i--) {
            items[i].style.borderBottom = 'none'
        }
}

export {
    changeShopBorder
}
