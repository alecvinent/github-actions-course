const App = require('../src/App')
const fs = require('fs')

describe('App', () => {
    it('Contains the compiled JS', async (done) => {
        fs.readFile('./public/main.js', 'utf-8', (err, data) => {
            expect(err).toBe(null)
            expect(data).toMatchSnapshot()
            done()
        })
    })
})