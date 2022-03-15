"use strict";
/* eslint-disable @typescript-eslint/no-var-requires */
// only called once at entry point
var result = require('dotenv').config();
if (!result.error) {
    Object.keys(result.parsed).forEach(function (key) {
        var value = result.parsed[key];
        if (value) {
            process.env[key] = value;
        }
    });
}
