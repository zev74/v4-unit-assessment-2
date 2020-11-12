//Test Suite
const countFiles = async (path, str, count) => {
  const response = await axios.get(
    `http://localhost:5782/api/count?path=${path}&str=${str}&count=${count}`
  )
  return response.data
}

const checkFiles = async (pathArr, strArr) => {
  const response = await axios.post(`http://localhost:5782/api/check`, {
    pathArr,
    strArr,
  })
  return response.data
}

const searchFiles = async (pathArr, strArr) => {
  const response = await axios.post(`http://localhost:5782/api/search`, {
    pathArr,
    strArr,
  })
  return response.data
}

const jsFile = 'js-in-the-dom/index.js'
const htmlFile = 'js-in-the-dom/index.html'

describe('Unit Assessment 2 - JS in the DOM', () => {
  describe('Step 1 - index.js', () => {
    it(`formBtn should exist`, () => {
      expect(formBtn).toBeDefined()
    })
    it(`form variable should exist`, () => {
      expect(form).toBeDefined()
    })
    describe(`toggler`, () => {
      it(`should exist`, async () => {
        const itemsToCheck = ['toggler=(', 'toggler=_']
        const response = await checkFiles([jsFile], itemsToCheck)
        expect(response || toggler).toBe(true)
      })
      it(`should toggle 'hide' class using classList`, async () => {
        const itemsToCheck = [
          `form.classList.toggle('hide')`,
          `form.classList.toggle("hide")`,
          'form.classList.toggle(`hide`)',
        ]
        const response = await checkFiles([jsFile], itemsToCheck)
        expect(response).toBe(true)
      })
      it(`should check if formBtn's innerText is strictly equal to X`, async () => {
        const itemsToCheck = [
          `formBtn.innerText==='X'`,
          `formBtn.innerText==="X"`,
          'formBtn.innerText===`X`',
        ]
        const response = await checkFiles([jsFile], itemsToCheck)
        expect(response).toBe(true)
      })
      it(`should change the innerText value from a + to an X and vice versa`, async () => {
        const itemsToCheck = [
          `formBtn.innerText='+'`,
          `formBtn.innerText='X'`,
          `formBtn.innerText="+"`,
          `formBtn.innerText="X"`,
          'formBtn.innerText=`+`',
          'formBtn.innerText=`X`',
        ]
        const response = await checkFiles([jsFile], itemsToCheck)
        expect(response).toBe(true)
      })
    })
  })

  describe('Step 1 - index.html', () => {
    it(`index.html should have a script tag linked to index.js`, async () => {
      const itemsToCheck = [
        `<scriptsrc="index.js"></script>`,
        `<scriptsrc='index.js'></script>`,
        `<scriptsrc="./index.js"></script>`,
        `<scriptsrc='./index.js'></script>`,
      ]
      const response = await checkFiles([htmlFile], itemsToCheck)
      expect(response).toBe(true)
    })
    it(`toggler function should be assigned to fire when the formBtn is clicked`, async () => {
      const itemsToCheck = [`onclick="toggler()"`, `onclick='toggler()'`]
      const response = await checkFiles([htmlFile], itemsToCheck)

      const jsItemsToCheck = [
        `formBtn.addEventListener('click'`,
        `formBtn.addEventListener("click"`,
        'formBtn.addEventListener(`click`',
      ]
      const jsResponse = await checkFiles([jsFile], jsItemsToCheck)

      const eitherResponse = response || jsResponse
      expect(eitherResponse).toBe(true)
    })
  })

  describe('Step 2 - index.js', () => {
    it(`nameInput and emailInput should exist`, async () => {
      const itemsToCheck = ['nameInput=', 'emailInput=']
      const response = await searchFiles([jsFile], itemsToCheck)
      expect(response).toBe(true)
    })
    it(`emailList should exist and be an array`, () => {
      expect(emailList).toBeDefined()
      expect(typeof emailList).toBe('object')
    })
    describe(`validateForm`, () => {
      it(`should exist`, () => {
        expect(validateForm).toBeDefined()
      })
      it(`should be a function`, () => {
        expect(typeof validateForm).toBe('function')
      })
      it(`should set the border of emailInput and nameInput using the style object`, async () => {
        const itemsToCheckOne = [
          `nameInput.style.border='2pxsolidred'`,
          `nameInput.style.border="2pxsolidred"`,
          'nameInput.style.border=`2pxsolidred`',
        ]
        const responseOne = await checkFiles([jsFile], itemsToCheckOne)
        const itemsToCheckTwo = [
          `emailInput.style.border='2pxsolidred'`,
          `emailInput.style.border="2pxsolidred"`,
          'emailInput.style.border=`2pxsolidred`',
        ]
        const responseTwo = await checkFiles([jsFile], itemsToCheckTwo)
        expect(responseOne && responseTwo).toBe(true)
      })
      it(`should push an object into the emailList array`, async () => {
        const response = await countFiles(jsFile, 'emailList.push(')
        expect(response).toBe(true)
      })
    })
    describe(`submitting the form`, () => {
      it(`validateForm should be assigned to fire when the form is submitted`, async () => {
        const itemsToCheck = [
          `form.addEventListener('submit',`,
          `form.addEventListener("submit",`,
          'form.addEventListener(`submit`,',
        ]
        const response = await checkFiles([jsFile], itemsToCheck)
        expect(response).toBe(true)
      })
      it(`callback should invoke preventDefault`, async () => {
        const response = await countFiles(jsFile, '.preventDefault(')
        expect(response).toBe(true)
      })
    })
  })

  describe('Step 3 - index.js', () => {
    it(`formContainer should exist`, async () => {
      const response = await countFiles(jsFile, 'formContainer=')
      expect(response).toBe(true)
    })
    describe(`removeMessage`, () => {
      it(`should exist`, async () => {
        const itemsToCheck = ['removeMessage=(', 'removeMessage=_']
        const response = await checkFiles([jsFile], itemsToCheck)
        expect(response || removeMessage).toBe(true)
      })
      it(`should be a function`, async () => {
        const itemsToCheck = ['removeMessage=(', 'removeMessage=_']
        const responseOne = await checkFiles([jsFile], itemsToCheck)
        const responseTwo = () =>
          typeof removeMessage === 'function' ? true : false
        expect(responseOne || responseTwo()).toBe(true)
      })
      it(`should use the remove method to remove the form container`, async () => {
        const response = await countFiles(jsFile, 'formContainer.remove(')
        expect(response).toBe(true)
      })
    })
    describe(`displayThankYou`, () => {
      it(`should exist`, async () => {
        const response = await checkFiles([jsFile], ['displayThankYou='])
        expect(response || displayThankYou).toBe(true)
      })
      it(`should be a function`, async () => {
        const itemsToCheck = ['displayThankYou=(', 'displayThankYou=_']
        const responseOne = await checkFiles([jsFile], itemsToCheck)
        const responseTwo = () =>
          typeof displayThankYou === 'function' ? true : false
        expect(responseOne || responseTwo()).toBe(true)
      })
      it(`uses innerText to change what the form container is displaying`, async () => {
        const response = await countFiles(jsFile, 'formContainer.innerText=')
        expect(response).toBe(true)
      })
    })
  })

  describe('Step 4 - index.js', () => {
    describe(`addEventListener should be used to add a change event to the name and email inputs`, () => {
      it(`there should be a change event on nameInput`, async () => {
        const itemsToCheck = [
          `nameInput.addEventListener('change',`,
          `nameInput.addEventListener("change",`,
          'nameInput.addEventListener(`change`,',
        ]
        const response = await checkFiles([jsFile], itemsToCheck)
        expect(response).toBe(true)
      })
      it(`there should be a change event on emailInput`, async () => {
        const itemsToCheck = [
          `emailInput.addEventListener('change',`,
          `emailInput.addEventListener("change",`,
          'emailInput.addEventListener(`change`,',
        ]
        const response = await checkFiles([jsFile], itemsToCheck)
        expect(response).toBe(true)
      })
    })
    describe(`the callback functions should change the border to none`, () => {
      it(`nameInput's border is set to none`, async () => {
        const itemsToCheck = [
          `nameInput.style.border='none'`,
          `nameInput.style.border="none"`,
          'nameInput.style.border=`none`',
        ]
        const response = await checkFiles([jsFile], itemsToCheck)
        expect(response).toBe(true)
      })
      it(`emailInput's border is set to none`, async () => {
        const itemsToCheck = [
          `emailInput.style.border='none'`,
          `emailInput.style.border="none"`,
          'emailInput.style.border=`none`',
        ]
        const response = await checkFiles([jsFile], itemsToCheck)
        expect(response).toBe(true)
      })
    })
  })

  describe('Step 5 - index.js', () => {
    it(`cart variable should store a new div made with createElement`, async () => {
      const itemsToCheck = [
        `cart=document.createElement('div')`,
        `cart=document.createElement("div")`,
        'cart=document.createElement(`div`)',
      ]
      const response = await checkFiles([jsFile], itemsToCheck)
      expect(response).toBe(true)
    })
    describe(`cartItems`, () => {
      it(`should exist`, async () => {
        const response = await countFiles(jsFile, 'cartItems')
        expect(response).toBe(true)
      })
      it(`should be initialized to 0`, async () => {
        const response = await countFiles(jsFile, 'cartItems=0')
        expect(response).toBe(true)
      })
    })
    describe(`addToCart`, () => {
      it(`should exist`, async () => {
        const response = await checkFiles([jsFile], ['addToCart='])
        expect(response || addToCart).toBe(true)
      })
      it(`should be a function`, async () => {
        const itemsToCheck = ['addToCart=(', 'addToCart=_']
        const responseOne = await checkFiles([jsFile], itemsToCheck)
        const responseTwo = () =>
          typeof addToCart === 'function' ? true : false
        expect(responseOne || responseTwo()).toBe(true)
      })
      it(`should use setAttribute to add cart-display class to cart`, async () => {
        const itemsToCheck = [
          `cart.setAttribute('class','cart-display')`,
          `cart.setAttribute("class","cart-display")`,
          'cart.setAttribute(`class`,`cart-display`)',
        ]
        const response = await checkFiles([jsFile], itemsToCheck)
        expect(response).toBe(true)
      })
      it(`should appendChild to add the cart div onto main`, async () => {
        const response = await countFiles(jsFile, 'main.appendChild(cart)')
        expect(response).toBe(true)
      })
    })
  })

  describe('Step 5 - index.html', () => {
    it(`all 3 buttons should have addToCart in an onclick attribute`, async () => {
      const responseOne = await countFiles(
        htmlFile,
        '<buttononclick="addToCart()">',
        3
      )
      const responseTwo = await countFiles(
        htmlFile,
        `<buttononclick='addToCart()'>`,
        3
      )
      expect(responseOne || responseTwo).toBe(true)
    })
  })
})
