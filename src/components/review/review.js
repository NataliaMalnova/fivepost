const changeReview = () => {
    const reviews = document.querySelectorAll('.js--reviews');
    if(reviews.length == 0) return;

    reviews.forEach(elems => {
        const review = elems.querySelectorAll('.js--review');
        if(review.length == 0) return;

        review.forEach(elem => {
            elem.addEventListener('click', () => {
                let active = 0;
                if(elem.classList.contains('active')) active = 1;
                review.forEach(item => {
                    item.classList.remove('active');
                });
                if(!active)
                    elem.classList.add('active');
            })
        })
    })
}

export default changeReview;