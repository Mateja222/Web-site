
function displayCart() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    var cartTable = document.getElementById('cartTable');
    var tbody = cartTable.getElementsByTagName('tbody')[0];

    
    tbody.innerHTML = '';

    
    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];

        var row = tbody.insertRow(i);
        var cellId = row.insertCell(0);
        var cellName = row.insertCell(1);
        var cellPrice = row.insertCell(2);

        cellId.textContent = i;
        cellName.textContent = item.name;
        cellPrice.textContent = '$' + item.price.toFixed(2);
    }

    showTotal();
}


function clearCart() {
    localStorage.clear();
    displayCart();
}

function showTotal() {

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let tfoot = document.getElementById('cartFooter');
    var total = 0;

    tfoot.innerHTML = '';

    for (var i = 0; i < cart.length; i++) {
        var item = cart[i];
        total += parseFloat(item.price);
    }
    var rtot = tfoot.insertRow(0);
    var celtot0 = rtot.insertCell(0);
    var celtot1 = rtot.insertCell(1);
    var celtot2 = rtot.insertCell(2);
    celtot0.textContent = "Total:";
    celtot2.textContent = "$" + total;
}


function submitForm() {
    
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var address = document.getElementById('address').value;

    let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

    
    var formData = new FormData();
    formData.append('ime', name);
    formData.append('email', email);
    formData.append('adresa', address)
    for (var i = 0; i < cartItems.length; i++) {
        var item = cartItems[i];
        formData.append(`${i}`,`${item.name} - $${item.price}`);
    }
    

    fetch('https://formspree.io/f/mdoqkgqe', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        
        console.log(data);
        alert('Porudzbina poslata!');
    })
    .catch(error => {
        
        console.error('Error submitting order:', error);
        alert('Greska prilikom kreiranja porudzbine. Pokusajte ponovo');
    });
}

