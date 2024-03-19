lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true
});

function addToCart(id, name, price) {
    
    let cart = localStorage.getItem('cart');
    let item = {id, name, price};
    
    if (!cart) {
        
        cart = [];
    } else {
        
        cart = JSON.parse(cart);
    }

    console.log('Item added to cart:', item);
    console.log('cart items: ', cart);
    cart.push(item);
    console.log('cart items: ', cart);

    localStorage.setItem('cart', JSON.stringify(cart));
    
    alert('Proizvod dodat u korpu!');
}