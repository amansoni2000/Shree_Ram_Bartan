// Functionality for Add to Cart Button
const addToCartButtons = document.querySelectorAll('.add-to-cart');
let cartItems = [];

// Handle Add to Cart
addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const productName = button.parentElement.querySelector('h3').textContent;
        const productPrice = button.parentElement.querySelector('p').textContent;

        // Add product to cart
        cartItems.push({ name: productName, price: productPrice });

        // Update Cart Count
        updateCartCount();
    });
});

// Update Cart Count
function updateCartCount() {
    const cartLink = document.querySelector('#cartLink');
    cartLink.textContent = `Cart (${cartItems.length})`;

    // Optionally, show the cart items in console
    console.log(cartItems);
}

// Optional: Handle Cart Display
document.querySelector('#cartLink').addEventListener('click', () => {
    alert('Items in your cart: ' + cartItems.length); // Example, modify as needed
});
