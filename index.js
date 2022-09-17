// index.js - main file
// [***].js - file to export/import

let payments = require('./payments/payment_debit');

let annualGifts = require('./gifts');
let commentsModule = require('./comments');

let config = require('./config/config');

console.log(config.config);

let result = annualGifts.christmasMoney();
console.log(result);

console.log(commentsModule.reviews);
console.log(commentsModule.getCurrentDay());
