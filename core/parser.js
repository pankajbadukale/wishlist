"use strict";
let fs = require('fs');
let cheerio = require("cheerio");//same jquery api
let regexp = require('node-regexp');//https://www.npmjs.com/package/node-regexp

/**
 * class Parser
 * @description Prase html string to json object
 */
class Parser  {
    constructor() {
        //https://github.com/cheeriojs/cheerio
        // $ = cheerio.load('<h2 class="title">Hello world</h2>');
        this.jquery = cheerio;
    }
}

module.exports = Parser;