const _clickOutside = (openClick, openOverflow, className, classNameOpen = false) => {
    document.addEventListener('click', function (event) {

        event.stopPropagation();

        if (event.target == openClick) return;
        let a = 0;

        for (let i = 0; i < openClick.children.length; i++) {
            if (event.target == openClick.children[i]) return a = 1;
        }

        for (let i = 0; i < openOverflow.children.length; i++) {
            if (event.target == openOverflow.children[i]) return a = 1;
        }
        if (a == 1) return;

        openOverflow.classList.remove(className);
        if (classNameOpen) openClick.classList.remove(classNameOpen);
    });
}

export default _clickOutside;
