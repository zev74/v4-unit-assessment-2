//Test Suite
const countFiles = async (path, str, count) => {
  let response = await axios.get(`http://localhost:4000/api/count?path=${path}&str=${str}&count=${count}`)
  return response.data
},

checkFiles = async (pathArr, strArr) => {
  let response = await axios.post(`http://localhost:4000/api/check`, {pathArr, strArr})
  return response.data
},

searchFiles = async (pathArr, strArr) => {
  let response = await axios.post(`http://localhost:4000/api/search`, {pathArr, strArr})
  return response.data
}

jsFile = 'vanilla-js/index.js',
htmlFile = 'vanilla-js/index.html'


describe('Week Two Skills Check - Vanilla JS', () => {
  describe('Step 1 - index.js', () => {
    it(`formBtn should exist`, () => {
      expect(formBtn).toBeDefined()
    })
    it(`should use 'getElementById' to select h3`, async () => {
      const itemsToCheck = [
        `formBtn=document.getElementById('close-form')`,
        `formBtn=document.getElementById("close-form")`,
        'formBtn=document.getElementById(`close-form`)'
      ],
      response = await checkFiles([jsFile], itemsToCheck)
      expect(response).toBe(true)
    })
    it(`form variable should exist`, () => {
      expect(form).toBeDefined()
    })
    it(`should use 'querySelector' to select form`, async () => {
      const itemsToCheck = [
        `form=document.querySelector('form')`,
        `form=document.querySelector("form")`,
        'form=document.querySelector(`form`)'
      ],
      response = await checkFiles([jsFile], itemsToCheck)
      expect(response).toBe(true)
    })
    it(`toggler function should exist`, () => {
      expect(toggler).toBeDefined()
    })
    it(`should toggle 'hide' class using classList`, async () => {
      const itemsToCheck = [
        `form.classList.toggle('hide')`,
        `form.classList.toggle("hide")`,
        'form.classList.toggle(`hide`)'
      ], 
      response = await checkFiles([jsFile], itemsToCheck)
      expect(response).toBe(true)
    })
    it(`should check if formBtn's innerText is strictly equal to X`, async () => {
      const itemsToCheck = [
        `formBtn.innerText==='X'`,
        `formBtn.innerText==="X"`,
        'formBtn.innerText===`X`'
      ],
      response = await checkFiles([jsFile], itemsToCheck)
      expect(response).toBe(true)
    })
    it(`should change the innerText value from a + to an X and vice versa`, async () => {
      const itemsToCheck = [
        `formBtn.innerText='+'`, 
        `formBtn.innerText='X'`,
        `formBtn.innerText="+"`, 
        `formBtn.innerText="X"`,
        'formBtn.innerText=`+`', 
        'formBtn.innerText=`X`'
      ],
      response = await checkFiles([jsFile], itemsToCheck)
      console.log(formBtn)
      expect(response).toBe(true)
    })
  })

  describe('Step 1 - index.html', () => {
    it(`index.html should have a script tag linked to index.js`, async () => {
      const itemsToCheck = [
        `<scriptsrc="index.js"></script>`,
        `<scriptsrc='index.js'></script>`,
        `<scriptsrc="./index.js"></script>`,
        `<scriptsrc='./index.js'></script>`
      ],
      response = await checkFiles([htmlFile], itemsToCheck)
      expect(response).toBe(true)
    })
    it(`toggler should be added in an onclick event`, async () => {
      const itemsToCheck = [
        `onclick="toggler()"`,
        `onclick='toggler()'`
      ],
      response = await checkFiles([htmlFile], itemsToCheck)
      expect(response).toBe(true)
    })
  })

  describe('Step 2 - index.js', () => {
    it(`nameInput and emailInput should exist`, async () => {
      const itemsToCheck = [
        'nameInput=',
        'emailInput='
      ],
      response = await searchFiles([jsFile], itemsToCheck)
      expect(response).toBe(true)
    })
    it(`should use getElementsByTagName to get name and email inputs`, async () => {
      const itemsToCheck = [
        `nameInput=document.getElementsByTagName('input')[0]`,
        `emailInput=document.getElementsByTagName('input')[1]`,
        `nameInput=document.getElementsByTagName("input")[0]`,
        `emailInput=document.getElementsByTagName("input")[1]`,
        'nameInput=document.getElementsByTagName(`input`)[0]',
        'emailInput=document.getElementsByTagName(`input`)[1]',
      ],
      response = await checkFiles([jsFile], itemsToCheck)
      expect(response).toBe(true)
    })
    it(`emailList should exist and be an array`, () => {
      expect(emailList).toBeDefined()
      expect(typeof emailList).toBe('object')
    })
    it(`validateForm should exist and be a function`, () => {
      expect(validateForm).toBeDefined()
      expect(typeof validateForm).toBe('function')
    })
    it(`should set the border of emailInput and nameInput using the style object`, async () => {
      const itemsToCheckOne = [
        `nameInput.style.border='2pxsolidred'`,
        `nameInput.style.border="2pxsolidred"`,
        'nameInput.style.border=`2pxsolidred`'
      ],
      responseOne = await checkFiles([jsFile], itemsToCheckOne),
      itemsToCheckTwo = [
        `emailInput.style.border='2pxsolidred'`,
        `emailInput.style.border="2pxsolidred"`,
        'emailInput.style.border=`2pxsolidred`'
      ],
      responseTwo = await checkFiles([jsFile], itemsToCheckTwo)
      expect(responseOne && responseTwo).toBe(true)
    })
    it(`should push an object into the emailList array`, async () => {
      const response = await countFiles(jsFile, 'emailList.push(')
      expect(response).toBe(true)
    })
    it(`should use addEventListener to add a submit event to form`, async () => {
      const itemsToCheck = [
        `form.addEventListener('submit',`,
        `form.addEventListener("submit",`,
        'form.addEventListener(`submit`,'
      ], 
      response = await checkFiles([jsFile], itemsToCheck)
      expect(response).toBe(true)
    })
    it(`should call event.preventDefault`, async () => {
      const response = await countFiles(jsFile, 'event.preventDefault')
      expect(response).toBe(true)
    })
    it(`should call validateForm`, async () => {
      const response = await countFiles(jsFile, 'validateForm()')
      expect(response).toBe(true)
    })
  })
  

  describe('Step 3 - index.js', () => {
    it(`formContainer should exist`, async () => {
      const response = await countFiles(jsFile, 'formContainer=')
      expect(response).toBe(true)
    })
    it(`should use getElementsByClassName to assign value`, async () => {
      const itemsToCheck = [
        `formContainer=document.getElementsByClassName('form-container')[0]`,
        `formContainer=document.getElementsByClassName("form-container")[0]`,
        'formContainer=document.getElementsByClassName(`form-container`)[0]'
      ],
      response = await checkFiles([jsFile], itemsToCheck)
      expect(response).toBe(true)
    })
    it(`removeMessage should exist and be a function`, async () => {
      const itemsToCheck = [
        'removeMessage=(',
        'removeMessage=_'
      ],
      responseOne = await checkFiles([jsFile], itemsToCheck),
      responseTwo = () => typeof removeMessage === 'function' ? true : false
      expect(responseOne || responseTwo()).toBe(true)
    })
    it(`should use the remove method to remove the form container`, async () => {
      const response = await countFiles(jsFile, 'formContainer.remove(')
      expect(response).toBe(true)
    })
    it(`displayThankYou should exist and be a function`, async () => {
      const itemsToCheck = [
        'displayThankYou=(',
        'displayThankYou=_'
      ],
      responseOne = await checkFiles([jsFile], itemsToCheck),
      responseTwo = () => typeof displayThankYou === 'function' ? true : false
      expect(responseOne || responseTwo()).toBe(true)
    })
    it(`uses innerText to change what the form container is displaying`, async () => {
      const response = await countFiles(jsFile, 'formContainer.innerText=')
      expect(response).toBe(true)
    })
    it(`should call setTimeout and pass in the correct arguments`, async () => {
      const response = await countFiles(jsFile, 'setTimeout(removeMessage,3000)')
      expect(response).toBe(true)
    }) 
  })

  describe('Step 4 - index.js', () => {
    it(`addEventListener should be used to add a change event to the name and email inputs`, async () => {
      const itemsOne = [
        `nameInput.addEventListener('change',`,
        `nameInput.addEventListener("change",`,
        'nameInput.addEventListener(`change`,'
      ],
      itemsTwo = [
        `emailInput.addEventListener('change',`,
        `emailInput.addEventListener("change",`,
        'emailInput.addEventListener(`change`,'
      ],
      responseOne = await checkFiles([jsFile], itemsOne),
      responseTwo = await checkFiles([jsFile], itemsTwo)
      expect(responseOne && responseTwo).toBe(true)
    })
    it(`the callback functions should change the border to none`, async () => {
      const itemsOne = [
        `nameInput.style.border='none'`,
        `nameInput.style.border="none"`,
        'nameInput.style.border=`none`'
      ],
      itemsTwo = [
        `emailInput.style.border='none'`,
        `emailInput.style.border="none"`,
        'emailInput.style.border=`none`'
      ],
      responseOne = await checkFiles([jsFile], itemsOne),
      responseTwo = await checkFiles([jsFile], itemsTwo)
      expect(responseOne && responseTwo).toBe(true)
    })
  })

  describe('Step 5 - index.js', () => {
    it(`cart variable should exist and store a new div made with createElement`, async () => {
      const itemsToCheck = [
        `cart=document.createElement('div')`,
        `cart=document.createElement("div")`,
        'cart=document.createElement(`div`)'
      ],
      response = await checkFiles([jsFile], itemsToCheck)
      expect(response).toBe(true)
    })
    it(`cartItems should exist and be initialized to 0`, async () => {
      const response = await countFiles(jsFile, 'cartItems=0')
      expect(response).toBe(true)
    })
    it(`addToCart should exist and should be a function`,async () => {
      const itemsToCheck = [
        'addToCart=(',
        'addToCart=_'
      ],
      responseOne = await checkFiles([jsFile], itemsToCheck),
      responseTwo = () => typeof addToCart === 'function' ? true : false
      expect(responseOne || responseTwo()).toBe(true)
    })
    it(`should use setAttribute to add cart-display class to cart`, async () => {
      const itemsToCheck = [
        `cart.setAttribute('class','cart-display')`,
        `cart.setAttribute("class","cart-display")`,
        'cart.setAttribute(`class`,`cart-display`)'
      ],
      response = await checkFiles([jsFile], itemsToCheck)
      expect(response).toBe(true)
    })
    it(`should appendChild to add the cart div onto main`, async () => {
      const response = await countFiles(jsFile, 'main.appendChild(cart)')
      expect(response).toBe(true)
    })
  })

  describe('Step 5 - index.html', () => {
    it(`all 3 buttons should have addToCart in an onclick attribute`, async () => {
      const responseOne = await countFiles(htmlFile, '<buttononclick="addToCart()">', 3),
      responseTwo = await countFiles(htmlFile, `<buttononclick='addToCart()'>`, 3)
      expect(responseOne || responseTwo).toBe(true)
    })
  })
})
