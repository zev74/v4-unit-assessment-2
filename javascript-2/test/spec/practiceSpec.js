//Helper Functions
const countFiles = async (path, str, count) => {
  let response = await axios.get(`http://localhost:4000/api/count?path=${path}&str=${str}&count=${count}`)
  return response.data
}

const checkFiles = async (pathArr, strArr) => {
  let response = await axios.post(`http://localhost:4000/api/check`, {pathArr, strArr})
  return response.data
}

const jsFile = 'javascript-2/javascript-2.js'

//Test Suite
describe('Skills Check 1', function () {
  describe('Problem 1 - foods', () => {
    it('calories should have been added to each food object', () => {
      let test = true
      for (let i = 0; i < foods.length; i++) {
        if (!foods[i].calories) {
          test = false
        }
      }
      expect(test).toEqual(true)
    })
    it('should use the forEach method', async () => {
      let response = await countFiles(jsFile, 'foods.forEach(', 1)
      expect(response).toBe(true)
    })
  })
  
  describe('Problem 2 - saleProducts', () => {
    it('saleProducts should exist', () => {
      expect(saleProducts).toBeDefined()
    })
    it('expect saleProducts to contain products objects with updated prices', () => {
      expect(typeof saleProducts[0].name).toBe('string')
      expect(typeof saleProducts[0].color).toBe('object')
      expect(saleProducts[0].price).toEqual(375)
      expect(typeof saleProducts[1].name).toBe('string')
      expect(typeof saleProducts[1].color).toBe('object')
      expect(saleProducts[1].price).toEqual(300)
      expect(typeof saleProducts[2].name).toBe('string')
      expect(typeof saleProducts[2].color).toBe('object')
      expect(saleProducts[2].price).toEqual(900)
      expect(typeof saleProducts[3].name).toBe('string')
      expect(typeof saleProducts[3].color).toBe('object')
      expect(saleProducts[3].price).toEqual(150)
      expect(typeof saleProducts[4].name).toBe('string')
      expect(typeof saleProducts[4].color).toBe('object')
      expect(saleProducts[4].price).toEqual(750)
    })
    it('should use the map method', async () => {
      let response = await countFiles(jsFile, 'saleProducts=products.map(', 1)
      expect(response).toBe(true)
    })
  })

  describe('Problem 3 - blueProducts', () => {
    it('blueProducts should exist', () => {
      expect(blueProducts).toBeDefined()
    })
    it('all blueProducts objects should have blue in their color array', () => {
      let test = true
      for (let i = 0; i < blueProducts.length; i++) {
        if (!blueProducts[i].color.includes('blue')) {
          test = false
        }
      }
      expect(test).toBe(true)
    })
    it('should use the filter method', async () => {
      let response = await countFiles(jsFile, 'blueProducts=saleProducts.filter(', 1)
      expect(response).toBe(true)
    })
  })

  describe('Problem 4 - orderTotal', () => {
    it('orderTotal should exist', () => {
      expect(orderTotal).toBeDefined()
    })
    it('orderTotal should be the correct value', () => {
      expect(orderTotal).toEqual(1200)
    })
    it('should use reduce method', async () => {
      let response = await countFiles(jsFile, 'orderTotal=blueProducts.reduce(', 1)
      expect(response).toBe(true)
    })
  })

  describe('Problem 5 - helensInfo', () => {
    it('helensInfo should exist', () => {
      expect(helensInfo).toBeDefined()
    })
    it('helensInfo should contain the correct properties and values', () => {
      let helenChecker = {
        name: 'Helen',
        street: '100 E. Main Street',
        city: 'Anytown', 
        state: 'AZ',
        zipCode: 85004,
        phoneNumber: 1234445555,
        email: 'helen@mymail.com'
      }
      let test = true
      for (let prop in helenChecker) {
        if (helenChecker[prop] != helensInfo[prop]) {
          test = false
        }
      }
      expect(test).toBe(true)
    })
    it('should use Object.assign', async () => {
      let response = await countFiles(jsFile, 'helensInfo=Object.assign(', 1)
      expect(response).toBe(true)
    })
  })

  describe('Problem 6 - ellensInfo', () => {
    it('ellensInfo should exist', () => {
      expect(ellensInfo).toBeDefined()
    })
    it('ellensInfo should contain the correct properties and values', () => {
      let ellenChecker = {
        name: 'Ellen',
        street: '100 E. Main Street',
        city: 'Anytown', 
        state: 'AZ',
        zipCode: 85004,
        phoneNumber: 1234445555,
        email: 'ellen@email.com'
      }
      let test = true
      for (let prop in ellenChecker) {
        if (ellenChecker[prop] != ellensInfo[prop]) {
          test = false
        }
      }
      expect(test).toBe(true)
    })
    it('should use the spread operator', async () => {
      let response = await countFiles(jsFile, '...helensInfo', 1)
      expect(response).toBe(true)
    })
  })

  describe('Problem 7 - email', () => {
    it('email should exist', () => {
      expect(email).toBeDefined()
    })
    it('email should be the correct value', () => {
      expect(email).toEqual('ellen@email.com')
    })
    it('should use destructuring', async () => {
      let response = await countFiles(jsFile, '{email}=ellensInfo', 1)
      expect(response).toBe(true)
    })
  })

  describe('Problem 8 - zipCode and state', () => {
    it('zipCode and state should exist', () => {
      expect(zipCode).toBeDefined()
      expect(state).toBeDefined()
    })
    it('zipCode should be the correct value', () => {
      expect(zipCode).toEqual(85004)
    }) 
    it('state should be the correct value', () => {
      expect(state).toEqual('AZ')
    })
    it('should use destructuring', async () => {
      let response = await countFiles([jsFile], ['{zipCode,state}=shippingInfo', '{state,zipCode}=shippingInfo'])
      expect(response).toBe(true)
    })
  })

  describe('Problem 9 - shouldAlert', () => {
    it('shouldAlert should exist', () => {
      expect(shouldAlert).toBeDefined()
    })
    it('shouldAlert should be the correct value', () => {
      expect(shouldAlert).toEqual(false)
    })
    it('should use dot notation', async () => {
      let response = await countFiles(jsFile, 'shouldAlert=userInfo.settings.alerts', 1)
      expect(response).toBe(true)
    })
  })

  describe('Problem 10 - topic', () => {
    it('topic should exist', () => {
      expect(topic).toBeDefined()
    })
    it('topic should be the correct value', () => {
      expect(topic).toEqual('tech')
    })
    it('should use bracket and/or dot notation', async () => {
      let response = await checkFiles([jsFile], ['topic=userInfo.topics[3]', 'topic=userInfo[topics][3]'])
      expect(response).toBe(true)
    })
  })

  describe('Problem 11 - commenterId', () => {
    it('commenterId should exist', () => {
      expect(commenterId).toBeDefined()
    })
    it('commenterId should be the correct value', () => {
      expect(commenterId).toEqual(1084)
    })
  })

  describe('Problem 12 - person', () => {
    it('person should exist', () => {
      expect(person).toBeDefined()
    })
    it('person should have all the correct properties', () => {
      let test = true
      if (!person.name || !person.age || !person.jobs || !person.birthday || !person.favorites || !person.kids) {
        test = false
      }
      expect(test).toBe(true)
    })
    it(`person's properties' values should be the correct data types`, () => {
      expect(typeof person.name).toBe('string')
      expect(typeof person.age).toBe('number')
      expect(typeof person.jobs).toBe('object')
      expect(typeof person.birthday).toBe('function')
      expect(typeof person.favorites).toBe('object')
      expect(typeof person.kids).toBe('object')
    })
    it(`person's job array should contain at least three strings`, () => {
      expect(typeof person.jobs[0]).toBe('string')
      expect(typeof person.jobs[1]).toBe('string')
      expect(typeof person.jobs[2]).toBe('string')
    })
    it(`person's birthday method should function correctly`, () => {
      const originalPerson = {...person}
      person.birthday()
      expect(originalPerson.age < person.age).toBe(true)
    })
    it(`person's favorites should exist and have the correct data types`, () => {
      expect(typeof person.favorites.color).toBe('string')
      expect(typeof person.favorites.number).toBe('number')
      expect(typeof person.favorites.book).toBe('string')
    })
    it(`person should have at least two kids, both with name and age properties of the correct data types`, () => {
      expect(typeof person.kids[0].name).toBe('string')
      expect(typeof person.kids[0].age).toBe('number')
      expect(typeof person.kids[1].name).toBe('string')
      expect(typeof person.kids[1].age).toBe('number')
    })
  })

  describe('Problem 12 - workout context', () => {
    it('context1 should be the correct value', () => {
      expect(context1).toBe(workout)
    })
  })

  describe('Problem 13 - myFunc context', () => {
    it('context2 should be the correct value', () => {
      expect(context2).toBe(window)
    })
  })

})
