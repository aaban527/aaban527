// Array of T-shirt products
const products = [
    {
        name: 'Classic White T-shirt',
        price: 'RS 700 With shipping only in Karachi',
        sizes: ['S', 'M', 'L'], // Sizes array
        image: 'https://www.kayazar.com/images/product_gallery/1647383044_kayazar-TShirt-What-Other-Think-None-Business-Army-Green.webp'
    },
    {
        name: 'Black Polo Shirt',
        price: 'RS 700 With shipping only in Karachi',
        sizes: ['S', 'M', 'L'], // Sizes array
        image: 'https://www.kayazar.com/images/product_gallery/1652728809_one-day-you-realize-001-Kayazar-T-shirt-Black.webp'
    },
    {
        name: 'Graphic T-shirt',
        price: 'RS 700 With shipping only in Karachi',
        sizes: ['S', 'M', 'L'], // Sizes array
        image: 'https://i5.walmartimages.com/seo/MC1R-I-Am-The-2-Percent-Funny-Redhead-T-Shirt_60f79407-d97b-4c4d-9e0a-3203af2459da.fc572cd49678df5571dcadd509d5c21f.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF'
    },
    {
        name: 'Blue V-Neck T-shirt',
        price: 'RS 700 With shipping only in Karachi',
        sizes: ['S', 'M', 'L'], // Sizes array
        image: 'https://www.swagshirts99.com/wp-content/uploads/2019/07/team-super-black-tshirt.jpg'
    },
    {
        name: 'Red Crew Neck T-shirt',
        price: 'RS 700 With shipping only in Karachi',
        sizes: ['S', 'M', 'L'], // Sizes array
        image: 'https://5.imimg.com/data5/SELLER/Default/2024/1/381637588/TG/EH/TF/60454813/13-500x500.jpg'
    },
    {
        name: 'Green Stripe T-shirt',
        price: 'RS 700 With shipping only in Karachi',
        sizes: ['S', 'M', 'L'], // Sizes array
        image: 'https://5.imimg.com/data5/SELLER/Default/2024/1/381637588/TG/EH/TF/60454813/13-500x500.jpg'
    }
];

// Function to display products on the page
function displayProducts() {
    const productGrid = document.getElementById('product-grid');
    products.forEach((product, index) => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;
        productImage.onclick = () => openModal(product.image);

        const productName = document.createElement('h4');
        productName.textContent = product.name;

        const productPrice = document.createElement('p');
        productPrice.textContent = product.price;

        const sizeLabel = document.createElement('p');
        sizeLabel.classList.add('product-sizes');
        sizeLabel.textContent = 'Sizes: ' + product.sizes.join(', ');

        // T-shirt code (assuming a unique code for each product)
        const productCode = document.createElement('p');
        productCode.textContent = 'Code: ' + 'TSC-' + (index + 1001); // Unique code generation

        // WhatsApp link
        const whatsappLink = document.createElement('a');
        whatsappLink.href = 'https://wa.me/923344444444?text=I%20am%20interested%20in%20the%20' + encodeURIComponent(product.name) + '%20with%20code%20TSC-' + (index + 1001);
        whatsappLink.target = '_blank'; // Opens in a new tab
        whatsappLink.classList.add('whatsapp-link');
        whatsappLink.innerHTML = '<i class="fab fa-whatsapp"></i> Order on WhatsApp';

        // Placeholder for showing WhatsApp number after clicking
        const whatsappNumber = document.createElement('p');
        whatsappNumber.classList.add('my-whatsapp-number');
        whatsappNumber.textContent = ''; // Initially empty

        // On click, show your WhatsApp number
        whatsappLink.onclick = (e) => {
            e.preventDefault(); // Prevent link from navigating away
            whatsappNumber.textContent = 'Your WhatsApp number: 22222222222';
        };

        productCard.appendChild(productImage);
        productCard.appendChild(productName);
        productCard.appendChild(productPrice);
        productCard.appendChild(sizeLabel);
        productCard.appendChild(productCode);
        productCard.appendChild(whatsappLink); // Add WhatsApp link
        productCard.appendChild(whatsappNumber); // Add placeholder for WhatsApp number

        productGrid.appendChild(productCard);
    });
}

// Modal functionality for zooming in on the T-shirt images
const modal = document.getElementById('zoomModal');
const zoomedImage = document.getElementById('zoomedImage');
const closeModal = document.getElementsByClassName('close')[0];

// Function to open modal with a zoomed-in image
function openModal(imageSrc) {
    modal.style.display = 'block';
    zoomedImage.src = imageSrc;
}

// Function to close modal
closeModal.onclick = function() {
    modal.style.display = 'none';
}

// Close modal when clicking outside the image
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Display products when the page loads
window.onload = displayProducts;
