const form = document.getElementById('product-form');
const priceGraph = document.getElementById('price-graph');
const ratingGraph = document.getElementById('rating-graph');
let products = [];

// Function to render the graphs
const renderGraphs = () => {
    // Clear existing graphs
    priceGraph.innerHTML = '';
    ratingGraph.innerHTML = '';

    products.forEach(product => {
        // Create price bar
        const priceBar = document.createElement('div');
        priceBar.className = 'bar';
        priceBar.style.height = `${product.price * 2}px`; // Scale the height
        priceBar.title = `${product.name}: $${product.price}`;
        priceGraph.appendChild(priceBar);

        // Create rating bar
        const ratingBar = document.createElement('div');
        ratingBar.className = 'bar';
        ratingBar.style.height = `${product.rating * 40}px`; // Scale the height
        ratingBar.title = `${product.name}: ${product.rating}`;
        ratingGraph.appendChild(ratingBar);
    });
};

// Function to handle form submission
form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('product-name').value;
    const price = parseFloat(document.getElementById('product-price').value);
    const rating = parseFloat(document.getElementById('product-rating').value);

    products.push({ name, price, rating });
    renderGraphs();

    // Clear form fields
    form.reset();
});

// Function to sort products by price
document.getElementById('sort-price').addEventListener('click', () => {
    products.sort((a, b) => a.price - b.price);
    renderGraphs();
});

// Function to sort products by rating
document.getElementById('sort-rating').addEventListener('click', () => {
    products.sort((a, b) => a.rating - b.rating);
    renderGraphs();
});
