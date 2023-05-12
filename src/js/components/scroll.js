/**
 * 
 * Ф-я для плавного скролла по якорям
 * 
 */

const scrolling = () => {
    let links = document.querySelectorAll('[href^="#"]');

    if(links.length == 0) return;

    links.forEach(link => {
        let speed = 0.2;
        if(link.hasAttribute('data-scroll-time')) speed = link.getAttribute('data-scroll-time');

        link.addEventListener('click', function (event) {
            event.preventDefault();

            let widthTop = document.documentElement.scrollTop - 30;
            let hash = this.hash;
            let toBlock = document.querySelector(hash).getBoundingClientRect().top;
            let start = null;

            requestAnimationFrame(step);

            function step(time) {
                if (start === null) {
                    start = time;
                }

                let progress = time - start,
                    r = (toBlock < 0 ? Math.max(widthTop - progress / speed, widthTop + toBlock) : Math.min(widthTop + progress / speed, widthTop + toBlock));

                document.documentElement.scrollTo(0, r);

                if (r != widthTop + toBlock) 
                    requestAnimationFrame(step);
                // else location.hash = hash;
            }
        });
    });
};
export default scrolling;