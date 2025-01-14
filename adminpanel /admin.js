// admin.js

// Function to get products from the database
function getProducts() {
    fetch('/api/products')
        .then(response => response.json())
        .then(data => {
            const products = data.products;
            const productHtml = products.map(product => {
                return `
                    <div class="col-md-4">
                        <div class="card">
                            <img src="${product.image}" alt="${product.name}" class="card-img-top">
                            <div class="card-body">
                                <h2 class="card-title">${product.name}</h2>
                                <p class="card-text">${product.description}</p>
                                <p class="card-text">Price: ${product.price}</p>
                            </div>
                        </div>
                    </div>
                `;
            }).join('');
            document.getElementById(' product-list').innerHTML = productHtml;
        })
        .catch(error => console.error('Error fetching products:', error));
}

// Function to initialize the admin panel
function initAdminPanel() {
    getProducts();
}

// Call the initialization function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', initAdminPanel);