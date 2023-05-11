const got = require('got');
const processHtml = require('./process-html');
const fs = require('fs');

require('babel-core/register');
require('babel-polyfill');

const validLang = ['en', 'fr', 'es', 'it'];

/**
 * Gets the result for the given word, available languages: 'en', 'fr', 'es', 'it'
 * @param  {String}   word      Word to be searched
 * @param  {String}   from      from language, default 'en'
 * @param  {String}   to        to language, default 'fr'
 * @param  {function} callback  callback function
 * @return {Object}             Object with the word data
 */
module.exports = async (word, from = 'en', to = 'fr', callback) => {
  if (!validLang.includes(from)) {
    throw new Error(`${from} is not a valid language`); 
  }
  if (!validLang.includes(to)) {
    throw new Error(`${to} is not a valid language`); 
  }

  try {
    const response = await got(`https://www.wordreference.com/${from}${to}/${word}`);
    if (callback) {
      return callback(processHtml(response.body)); 
    } else {
      return processHtml(response.body); 
    }
  } catch (e) {
    console.log(e);
  }
};
