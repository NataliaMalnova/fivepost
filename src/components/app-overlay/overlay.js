const showModal = () => {

    const btn = document.querySelectorAll('[data-show-modal]')

    if(btn.length == 0) return

    btn.forEach(elem => {
        let overlay = document.querySelector("." + elem.getAttribute('data-show-modal'))

        if(!overlay) return

        const close = overlay.querySelector('.overlay-close')

        const notshow = elem.querySelectorAll('[data-notshow-modal]');



        elem.addEventListener('click', function(e) {
            let show = 1;
            notshow.forEach(item => {
                if (e.target == item) {
                    show = 0;
                    return;
                }
            })

            e.preventDefault();
            if(!show) return;

            if(elem.hasAttribute('data-modal-promo')) {
                overlay.classList.add('modal-promo');
                overlay.querySelector('.btn').classList.add('btn-orange');
                overlay.querySelector('.btn').classList.remove('btn-green');
                overlay.querySelector('.input-wrapper').classList.add('input-wrapper--orange');
                overlay.querySelector('.input-wrapper').classList.remove('input-wrapper--green');
            } else {
                overlay.classList.remove('modal-promo');
                overlay.querySelector('.btn').classList.remove('btn-orange');
                overlay.querySelector('.btn').classList.add('btn-green');
                overlay.querySelector('.input-wrapper').classList.remove('input-wrapper--orange');
                overlay.querySelector('.input-wrapper').classList.add('input-wrapper--green');
            }
            document.documentElement.style.overflowY = 'hidden';

            overlay.style.zIndex = 999;
            elem.disabled = true;

            setTimeout(() => {
                overlay.classList.add('overlay-show')
                elem.disabled = false
            }, 100)
        });
        if(close) {
            close.addEventListener('click', function(e) {

                e.preventDefault()
                clickClose()
            })
        }

        overlay.addEventListener('click', function(e) {
            if (e.target != overlay) return
            clickClose()
        })

        const clickClose = () => {
            if (getComputedStyle(overlay.querySelector('.overlay-wrap')).marginRight != '0px') return
            overlay.classList.remove('overlay-show')
            setTimeout(() => {
                overlay.style.zIndex = -1
                document.documentElement.style.overflowY = 'auto'
            }, 600)
        }
    })
}

export default showModal;

