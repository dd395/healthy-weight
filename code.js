$(document).ready(function () {


        const button = document.querySelector(".toggle-button");
        button.addEventListener('click', () => {
            const content = document.querySelector('.toggle-content');
            const ariaHidden = content.getAttribute('aria-hidden');

            content.setAttribute('aria-hidden', ariaHidden === 'true' ? 'false' : 'true');

            const btnText = content.getAttribute('aria-hidden') === 'true' ? 'Show' : 'Hide';
            button.innerHTML = `${btnText} Quiz`;
        })
})















