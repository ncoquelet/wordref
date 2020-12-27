const request = require('node-superfetch')
const processHtml = require('./lib/process-html')
require('babel-core/register')
require('babel-polyfill')

const validLang = ['en', 'fr', 'es', 'it']

/**
 * Gets the result for the given word
 * @param  {String} word Word to be searched
 * @param  {String} from from language, default en
 * @param  {String} to   to language, default es
 * @return {Object}      Object with the word data
 */
module.exports = async (word, from = 'en', to = 'fr') => {
  if (validLang.indexOf(from) !== -1) return `${from} is not a valid language`
  if (validLang.indexOf(to) !== -1) return `${to} is not a valid language`
  const html = await request
    .get(`https://www.wordreference.com/${from}${to}/${word}`)
    .catch(e => {
      return e
    })
  return processHtml(html.raw)
}
