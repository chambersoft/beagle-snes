var argv = require('minimist')(process.argv.slice(2), {
  alias: {
    "input": "i"
  }
});

if (!(argv.input)) {
  console.log("Input required with -i option.");
  process.exit(1);
}

var express = require('express');
var fs = require('fs');
var cheerio = require('cheerio');



//All the web scraping magic will happen here
var url = 'http://www.imdb.com/title/tt1229340/';

// The structure of our request call
// The first parameter is our URL
// The callback function takes 3 parameters, an error, response status code and the html

