let cart = [];

function addToCart(productName, productPrice) {
    // Ajouter l'article au panier
    cart.push({ name: productName, price: parseFloat(productPrice) });
    alert(`${productName} a été ajouté au panier.`);
    updateCartDisplay();
}

function updateCartDisplay() {
    const cartContainer = document.getElementById('cart-items');
    cartContainer.innerHTML = ''; // Vider le contenu du panier

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.textContent = `${item.name} - ${item.price}€`;
        cartContainer.appendChild(itemElement);
    });

    const totalElement = document.getElementById('cart-total');
    const total = cart.reduce((total, item) => total + item.price, 0);
    totalElement.textContent = `Total: ${total.toFixed(2)}€`;
}

function toggleCart() {
    const cartContainer = document.getElementById('cart-container');
    cartContainer.classList.toggle('show');
}

document.getElementById('cart-button').addEventListener('click', toggleCart);

document.querySelectorAll('.add-to-cart').forEach(button => {
    button.addEventListener('click', (event) => {
        const productName = event.target.dataset.name;
        const productPrice = event.target.dataset.price;
        addToCart(productName, productPrice);
    });
});
