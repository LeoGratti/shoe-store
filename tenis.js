document.addEventListener('DOMContentLoaded', () => {
    // Seleciona todas as opções de cor para o tênis Asics
    const asicsColorOptions = document.querySelectorAll('.cor span');
    const asicsImg = document.getElementById('tenisImg');
    const carrinhoAsics = document.getElementById('carrinhoAsics');

    // Adiciona um evento de clique a cada opção de cor do tênis Asics
    asicsColorOptions.forEach(option => {
        option.addEventListener('click', () => {
            const newImgSrc = option.getAttribute('data-img');
            const newBgColor = option.getAttribute('data-bg-color');

            asicsImg.src = newImgSrc;

            document.documentElement.style.setProperty('--bg-color-before-asics', newBgColor);
        });
    });

    const adidasColorOptions = document.querySelectorAll('.cor-adidas span');
    const adidasImg = document.getElementById('adidasImg');
    const carrinhoAdidas = document.getElementById('carrinhoAdidas');

    adidasColorOptions.forEach(option => {
        option.addEventListener('click', () => {
            const newImgSrc = option.getAttribute('data-img');
            const newBgColor = option.getAttribute('data-bg-color');

            adidasImg.src = newImgSrc;

            document.documentElement.style.setProperty('--bg-color-before-adidas', newBgColor);
        });
    });
});
