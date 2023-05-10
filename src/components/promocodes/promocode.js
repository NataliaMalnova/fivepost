const filterPromocodes = () => {
    const wrap = document.querySelectorAll('.js--filter');

    if(wrap.length == 0) return;

    wrap.forEach(elem => {
        const element = elem.querySelectorAll('.js--filter-btn');
        const content = elem.querySelectorAll('.js--filter-content');

        if(element.length == 0 || content.length == 0) return;

        element.forEach(item => {
            let filter = 'all'

            item.addEventListener('click', () => {
                element.forEach(em => {
                    em.classList.remove('active')
                });
                item.classList.add('active')

                if(!item.getAttribute('data-filter')) return;

                filter = item.getAttribute('data-filter');

                let mas = [];

                content.forEach(el => {
                    if(filter == 'all') {
                        el.style.display="flex";
                        mas.push(el);
                    } else if (el.getAttribute('data-filter') == filter) {
                        el.style.display="flex";
                        mas.push(el);
                    } else {
                        el.style.display="none";
                    }
                })
                changeBottomBorder(mas);
                window.addEventListener('resize', function(event) {
                    changeBottomBorder(mas);
                }, true);
            })
        })
    })
}

const changeBottomBorder = (items) => {
    if(window.innerWidth >= 768) {
        items.forEach(elem => {
            elem.style.borderBottom = 'none'
        });
        return;
    }

    items.forEach(elem => {
        elem.style.borderBottom = '1px solid #bfbfbf'
    });

    items[items.length - 1].style.borderBottom = 'none'

}

const showPromo = () => {
    const btn = document.querySelectorAll('.js--promo-btn');

    if(btn.length == 0) return;

    btn.forEach(elem => {
        const promo = elem.querySelector('.js--promo');
        const text = elem.querySelector('.js--promo-text');
        elem.addEventListener('click', () => {
            elem.classList.add('active');
            promo.classList.remove('d-none');
            text.classList.add('d-none');
        })
    })
}

const showMore = () => {
    const wrap = document.querySelectorAll('.js--show-more');

    if(wrap.length == 0) return;

    wrap.forEach(element => {
        const btn = element.querySelector('.js--show-more-btn');
        const text = element.querySelector('.js--show-more-content');

        if (!btn || !text) return

        let heightStart = text.clientHeight;
        text.style.setProperty('max-height', heightStart + 'px');

        btn.addEventListener('click', () => {
            if (text.classList.contains('active')) {
                text.style.setProperty('max-height', heightStart + 'px');
                btn.classList.remove('active');
                setTimeout(() => text.classList.remove('active'), 600);
            } else {
                text.classList.add('active');
                btn.classList.add('active');
                text.style.setProperty('max-height', text.scrollHeight + 'px');
            }
        })
    })
};

export {
    filterPromocodes,
    showPromo,
    showMore
}