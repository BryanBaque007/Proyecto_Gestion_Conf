document.getElementById('orderForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Obtener datos del formulario
    const name = event.target[0].value;
    const email = event.target[1].value;
    const product = event.target[2].value;
    const quantity = event.target[3].value;

    // Mostrar mensaje de confirmación
    const message = document.getElementById('orderMessage');
    message.textContent = `Gracias, ${name}. Tu pedido de ${quantity} ${product} ha sido recibido.`;
    message.classList.remove('is-hidden');
    message.classList.add('is-primary');
});

document.addEventListener('DOMContentLoaded', () => {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    if ($navbarBurgers.length > 0) {
        $navbarBurgers.forEach(el => {
            el.addEventListener('click', () => {
                const target = el.dataset.target;
                const $target = document.getElementById(target);
                el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }
});
