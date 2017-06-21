// Global vars

let total = 0
    itemCount = []
    shoppingCart = []


// Add item to shopping cart
let addToCart = () => {

}
// Removes all items from shopping cart
let clearCart = () => {
    itemCount = 0
    document.getElementByID('cart-item-count').innerHTML = '(${itemCount})'

}
// Close shopping cart window
let clossModal = () => {

}
// Show items in cart
let showCart = () => {

}

// Modal
let modal = document.getElementById('myModal')
    modalButton = document.getElementById('cart-button')
    span = document.getElementById('close')[0]

modalButton.onclick = () => {
  modal.style.display = 'block'
}

span.onclick = () => {
  modal.style.display = 'none'
}

window.onlick = () => {
  if(event.target == modal) {
    modal.style.display = ''
  }
}
