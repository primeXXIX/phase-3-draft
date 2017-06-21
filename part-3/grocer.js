// Global Vars
let itemCount = 0
    total = 0
    itemList = []
    priceList = []

// Add items to cart
let addItems = (item, cost) => {
  itemList.push(item)
  priceList.push("$"+cost)
  total += cost
  itemCount ++
  document.getElementById("cart-item-count").innerHTML = `(${count})`
}

// List View
let createList = () => {
  document.getElementsByClassName('showItems')[0].innerHTML = ""
  document.getElementsByClassName('showCost')[0].innerHTML = ""
  let wrapper = document.getElementsByClassName('showItems')[0]
  let wrapper2 = document.getElementsByClassName('showCost')[0]
  // Convert to Map later
  for (let i = 0; i < itemList.length; i++) {
    const li_Items = document.createElement('li')
    const li_Cost = document.createElement('li')
    li_Items = itemList[i]
    li_Cost = priceList[i]
    wrapper.appendChild(li_Items)
    wrapper2.appendChild(li_Cost)
  }

}

let totalSum = () => {
  document.getElementsByClassName("sum")[0].innerHTML =  `Total $${total.toFixed(2)}`
}

// Clear List
let clearList = () => {
  itemCount = 0
  document.getElementById("cart-item-count").innherHTML = `(${count})`
  itemList = []
  priceList = []
  total = 0
  modal.style.display = "none"
}

// Modal components
let modal = document.getElementById('modal')
    modalButton = document.getElementById('cart-button')
    span = document.getElementsByClassName('close')[0]

modalButton.onlick = function() {
    modal.style.display = "block"
    createList()
    totalSum()
}

span.onclick = function() {
  modal.style.display = "none"
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none"
  }
}
