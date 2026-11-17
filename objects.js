// 1. Using dot and bracket notation, modify the existing object values to replace the information with your own

var me = {
    'name': 'Jake Overall',
    'age': 29,
    'hair color': 'brown'
};

// dot notation
me.name = 'Your Name';
me.age = 25;
// bracket notation (required for keys with spaces)
me['hair color'] = 'black';

console.log(me);


// 2. Iterate over the object to console.log the property or key names

for (var key in me) {
  console.log(key);
}
