# wordreference-api [![NPM version][npm-image]][npm-url]

> An api to use the worldreference.com information

## Installation

```sh
$ npm install --save wordref
```

## Usage

```js
const wr = require('wordref');
/**
 * wr
 * Gets the result for the given word, available languages: 'es', 'en', 'it', 'fr'
 * @param  {String} word Word to be searched
 * @param  {String} from from language, default 'en'
 * @param  {String} to   to language, default 'es'
 * @return {Object}      Object with the word data
 */
wr('Rainbow');
wr('Rainbow','en','fr').then((result)=> console.log);
```
Return:
``` javascript
{
  "word": "Rainbow",
  "pronWR": "/ˈreɪnˌbəʊ/",
  "audio": [
    "/audio/en/us/us/en069238.mp3",
    "/audio/en/uk/general/en069238.mp3",
    "/audio/en/uk/Yorkshire/en069238-55.mp3",
    "/audio/en/Irish/en069238.mp3",
    "/audio/en/scot/en069238.mp3",
    "/audio/en/us/south/en069238.mp3",
    "/audio/en/Jamaica/en069238.mp3"
  ],
  "translations": [
    {
      "title": "Principal Translations",
      "translations": [
        {
          "from": "rainbow",
          "fromType": "n",
          "toType": "grupo nom",
          "to": "arco iris "
        }
      ]
    },
    {
      "title": "Compound Forms:",
      "translations": [
        {
          "from": "rainbow trout",
          "fromType": "n",
          "toType": "nf",
          "to": "trucha arcoiris "
        }
      ]
    }
  ]
}
```
## License

MIT © [Fabian Gutierrez](fabiangutierrez.co)
Original: https://github.com/fega/wordreference-api


[npm-image]: https://badge.fury.io/js/wordref.svg
[npm-url]: https://npmjs.org/package/wordref
