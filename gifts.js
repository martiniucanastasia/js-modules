//Import from comments.js
let fromReviews = require('./comments');
console.log(fromReviews.reviews[0].user);
// Variable
let christmasGifts = {
  reciver: 'sister',
  gift: 'iphone',
};
//Function
function christmasMoney(a, b) {
  a = 300;
  b = 400;
  console.log('Here is my christmas money:' + (a + b));
  return a + b + 'abc';
}
module.exports = {
  christmasGifts,
  christmasMoney,
};
