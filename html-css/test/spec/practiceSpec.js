//Helper Functions
const searchFiles = async (pathArr, strArr) => {
  let response = await axios.post(`http://localhost:4000/api/search`, {pathArr, strArr})
  return response.data
}

const checkFiles = async (pathArr, strArr) => {
  let response = await axios.post(`http://localhost:4000/api/check`, {pathArr, strArr})
  return response.data
}

//Test Suite
describe('HTML & CSS Section', () => {
  describe('The following HTML tags are used in index.html', () => {
    let htmlFiles = ['html-css/index.html']

    it('section, article, aside, main', async () => {
      let itemsToCheck = [
        '<section', 
        '</section>', 
        '<article',
        '</article>', 
        '<aside',
        '</aside>',
        '<main', 
        '</main>'
      ]
      let response = await searchFiles(htmlFiles, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('header, nav, body, footer', async () => {
      let itemsToCheck = [
        '<header', 
        '</header>', 
        '<nav',
        '</nav>', 
        '<body',
        '</body>',
        '<footer', 
        '</footer>'
      ]
      let response = await searchFiles(htmlFiles, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('h1, h2, br, img, ol, li, title, meta(description)', async () => {
      let itemsToCheck = [
        '<h1', 
        '</h1>', 
        '<h2',
        '</h2>', 
        '<br',
        '<img',
        '<ol',
        '</ol>',
        '<li', 
        '</li>',
        '<title',
        '</title>', 
        '<meta', 
        'name=',
        'description',
        'content='
      ]
      let response = await searchFiles(htmlFiles, itemsToCheck)
      expect(response).toEqual(true)
    })


  })

  describe('The following CSS properties and values are used in styles.css', function () {
    let cssFiles = ['html-css/styles.css']
   
    it('position, display, flex', async () => {
      let itemsToCheck = [
        'position:',
        'display:', 
        'display:flex;'
      ]
      let response = await searchFiles(cssFiles, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('font-family, font-size, color', async () => {
      let itemsToCheck = [
        'font-family:', 
        'font-size:', 
        'color:'
      ]
      let response = await searchFiles(cssFiles, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('padding, margin, box-shadow', async () => {
      let itemsToCheck = [
        'padding:',
        'margin:', 
        'box-shadow:'
      ]
      let response = await searchFiles(cssFiles, itemsToCheck)
      expect(response).toEqual(true)
    })

    it('uses relative units somewhere', () => {
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
