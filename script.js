const hamburger = document.querySelector('.hamburger')
const closebtn = document.querySelector('.close')
hamburger.addEventListener('click', function(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
})
closebtn.addEventListener('click', function(){
     const sidebar = document.querySelector('.sidebar')
   sidebar.style.display = 'none'
})

function changeQty(delta) {
  const qtyInput = document.getElementById('qty');
  let current = parseInt(qtyInput.value);
  current = isNaN(current) ? 0 : current + delta;
  if (current < 0) current = 0;
  qtyInput.value = current;
}
function addToCart(){
  const qty = parseInt(document.getElementById('qty').value)
  if (qty > 0){
    const item = {
      name: "Fall Limited Edition Sneakers",
      price: 125,
      qty: qty,
      image: "/images/image-product-1.jpg",
    }
    cart = [item]
    updateCartBadge();
    renderCartDropdown();
    showCartDropdown();
  }
}
function updateCartBadge() {
  document.getElementById('cart-badge').textContent = cart.reduce((sum, i) => sum + i.qty, 0);
}
function renderCartDropdown() {
  const container = document.getElementById('cart-items');
  container.innerHTML = "";

  if (cart.length === 0) {
    container.innerHTML = `<p class="para">Your cart is empty.</p>`;
    return;
  }

  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "cart-item";
    div.innerHTML = `
      <img class="img" src="${item.image}" alt="${item.name}">
      <div class="cart-item-info">
        <p>${item.name}</p>
        <p>$${item.price.toFixed(2)} x ${item.qty} <strong>$${(item.price * item.qty).toFixed(2)}</strong></p>
      </div>
      <span class="cart-item-remove" onclick="removeFromCart(${index})"><img class="delete" src="/images/icon-delete.svg" ></span>
    `;
    container.appendChild(div);
  });
}
function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartBadge();
  renderCartDropdown();
}

function toggleCartDropdown() {
  document.getElementById("cart-dropdown").style.display =
    document.getElementById("cart-dropdown").style.display === "flex" ? "none" : "flex";
}
function showCartDropdown() {
  document.getElementById("cart-dropdown").style.display = "flex";
}
const images = [
   '/images/image-product-1.jpg',
    '/images/image-product-2.jpg',
     '/images/image-product-3.jpg',
      '/images/image-product-4.jpg'
]

let currentImageIndex = 0

function openLightbox(){
  document.getElementById("lightbox").style.display = "flex"
  setImage(currentImageIndex)
}
function closeLightbox() {
  document.getElementById("lightbox").style.display = "none";
}
function setImage(index) {
  currentImageIndex = index;
  document.getElementById("lightbox-img").src = images[index];
}
function prevImage() {
  currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
  setImage(currentImageIndex);
}
function nextImage() {
  currentImageIndex = (currentImageIndex + 1) % images.length;
  setImage(currentImageIndex);
}