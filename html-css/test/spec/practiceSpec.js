//Helper Functions
const searchFiles = async (pathArr, strArr) => {
  let response = await axios.post(`http://localhost:5782/api/search`, {pathArr, strArr})
  return response.data
}

const checkFiles = async (pathArr, strArr) => {
  let response = await axios.post(`http://localhost:5782/api/check`, {pathArr, strArr})
  return response.data
}

//Test Suite
describe('Unit Assessment 2 -- HTML & CSS', () => {
  describe('The following HTML tags are used in index.html', () => {
    let htmlFile = ['html-css/index.html']

    it('section', async () => {
      let itemsToCheck = [
        '<section', 
        '</section>'
      ]
      let response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('article', async () => {
      let itemsToCheck = [
        '<article',
        '</article>'
      ]
      let response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('aside', async () => {
      let itemsToCheck = [
        '<aside',
        '</aside>'
      ]
      let response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('main', async () => {
      let itemsToCheck = [
        '<main', 
        '</main>'
      ]
      let response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('header', async () => {
      let itemsToCheck = [
        '<header', 
        '</header>'
      ]
      let response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('nav', async () => {
      let itemsToCheck = [
        '<nav',
        '</nav>'
      ]
      let response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('body', async () => {
      let itemsToCheck = [
        '<body',
        '</body>'
      ]
      let response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('footer', async () => {
      let itemsToCheck = [
        '<footer', 
        '</footer>'
      ]
      let response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('h1', async () => {
      let itemsToCheck = [
        '<h1', 
        '</h1>'
      ]
      let response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('h2', async () => {
      let itemsToCheck = [
        '<h2',
        '</h2>'
      ]
      let response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('br', async () => {
      let itemsToCheck = [
        '<br'
      ]
      let response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('img', async () => {
      let itemsToCheck = [
        '<img'
      ]
      let response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('ol', async () => {
      let itemsToCheck = [
        '<ol',
        '</ol>'
      ]
      let response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('li', async () => {
      let itemsToCheck = [
        '<li', 
        '</li>'
      ]
      let response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('title', async () => {
      let itemsToCheck = [
        '<title',
        '</title>'
      ]
      let response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('meta tag with name, description, and content attributes', async () => {
      let itemsToCheck = [
        '<meta', 
        'name=',
        'description',
        'content='
      ]
      let response = await searchFiles(htmlFile, itemsToCheck)
      expect(response).toEqual(true)
    })
  })



  describe('The following CSS properties and values are used in styles.css', () => {
    let cssFiles = ['html-css/styles.css']
   
    it('position', async () => {
      let itemsToCheck = [
        'position:'
      ]
      let response = await searchFiles(cssFiles, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('display', async () => {
      let itemsToCheck = [
        'display:'
      ]
      let response = await searchFiles(cssFiles, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('flex display', async () => {
      let itemsToCheck = [
        'display:flex'
      ]
      let response = await searchFiles(cssFiles, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('color', async () => {
      let itemsToCheck = [ 
        'color:'
      ]
      let response = await searchFiles(cssFiles, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('font-family', async () => {
      let itemsToCheck = [
        'font-family:'
      ]
      let response = await searchFiles(cssFiles, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('font-size', async () => {
      let itemsToCheck = [ 
        'font-size:'
      ]
      let response = await searchFiles(cssFiles, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('padding', async () => {
      let itemsToCheck = [
        'padding:'
      ]
      let response = await searchFiles(cssFiles, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('margin', async () => {
      let itemsToCheck = [
        'margin:'
      ]
      let response = await searchFiles(cssFiles, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('box-shadow', async () => {
      let itemsToCheck = [
        'box-shadow:'
      ]
      let response = await searchFiles(cssFiles, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('use at least one relative unit', async () => {
      let itemsToCheck = [
        '%;',
        'vw;',
        'vh;',
        'em;',
        'rem;'
      ]
      let response = await checkFiles(cssFiles, itemsToCheck)
      expect(response).toEqual(true)
    })

  })

})