//Function
function getCurrentDay() {
  return new Date().getFullYear();
}

// [i think 'let' will be better]
//Variable
let reviews = [
  {
    user: 'Sam Harris',
    title: 'WTF I just watched...',
  },
  {
    user: 'Joe Rogan',
    title: 'Amazing, you got yourself a subscriber!',
  },
];

module.exports = {
  reviews,
  getCurrentDay,
};
