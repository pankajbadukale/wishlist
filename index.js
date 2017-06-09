"use strict";

let http = require("./core/http");
let fs = require('fs');

class Flipkart extends http {
    constructor(url="") {
        super();
        this.url = url;
    }

    getPage() {
        this.fetchPage(this.url).then((body) => {
            console.log("data saved check");
            fs.writeFile("./home.html", body);
        });
    }
}

new Flipkart('http://www.flipkart.com/').getPage();