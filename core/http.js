"use strict";
let request = require("request");
request = request.defaults({jar: true});//save cookie for each request so that it will help

let Parser = require("./parser");

class Http extends Parser {
    constructor() {
        super();
        this.request = request;
    }
    
    /**
     * accept base and segment of url and send requirest to remote and get html data
     * 
     * @accept baseUrl String
     * @accept segment String
     * 
     * @return Promise
     */
    fetchPage(baseUrl = "https://www.google.in", segment = "") {
        return new Promise((success, fail) => {
            this.request(baseUrl, (error, response, body) => {
                if (error) {
                    fail(error);
                }
                else {
                    success(body);
                }
            });
        });
    }
    
    /**
     * post data to remote rerver
     * 
     * 
     */
    postPageRequest(url, data={}, headers={}, cookie={}) {
        let options = {
            url: url,
            form: data
        };
        return new Promise((success, fail) => {
            this.request.post(options, (error, response, body) => {
                if (error) {
                    fail(error);
                }
                else {
                    success(body);
                }
            });
        });
    }
}

module.exports = Http;