const wr = require('./../lib')
const fs = require('fs')

wr('water')
  .then(res =>
    fs.writeFile('example.json', JSON.stringify(res, undefined, 2), err => {
      if (err) throw err
      console.log('The file has been saved!')
    })
  )
  .catch(res => console.log(res))
