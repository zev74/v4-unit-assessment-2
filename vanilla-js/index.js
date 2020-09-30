
const formBtn = document.getElementById('close-form'),
form = document.querySelector('form'),
main = document.querySelector('main'),
cart = document.createElement('div'),
nameInput = document.getElementsByTagName('input')[0],
emailInput = document.getElementsByTagName('input')[1],
emailList = [],
formContainer = document.getElementsByClassName('form-container')[0]
let cartItems = 0

const toggler = () => {
    form.classList.toggle('hide')
    formBtn.innerText === 'X' 
    ?
    formBtn.innerText = '+'
    : 
    formBtn.innerText = 'X'
}

const validateForm = () => {
    if (!nameInput.value && !emailInput.value) {
        nameInput.style.border = '2px solid red'
        emailInput.style.border = '2px solid red'
        alert('you must enter a name and an email address to subscribe!')
    } else if (!nameInput.value) {
        nameInput.style.border = '2px solid red'
        alert('please enter a name to subscribe')
    } else if (!emailInput.value) {
        emailInput.style.border = '2px solid red'
        alert('please enter an email address to subscribe')
    } else {
        emailList.push({name: nameInput.value, email: emailInput.value})
        displayThankYou()
    }
}

form.addEventListener('submit', event => {
    event.preventDefault()
    console.log('you clicked submit')
    validateForm()
})

const displayThankYou = () => {
    formContainer.innerText = 'Thank you for subscribing!'
    setTimeout(removeMessage, 3000)
}

const removeMessage = () => {
    formContainer.remove()
}

nameInput.addEventListener('change', () => {
    nameInput.style.border = 'none'
})

emailInput.addEventListener('change', () => {
    emailInput.style.border = 'none'
})

const addToCart = () => {
    if (cartItems === 0) {
        cartItems = 1
        cart.setAttribute('class', 'cart-display')
        cart.innerText = `Your Cart: ${cartItems} item`
        main.appendChild(cart)
    } else {
        cartItems += 1
        cart.innerText = `Your Cart: ${cartItems} items`
    }
}
