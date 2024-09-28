
# word-prefixes

This package returns all the prefixes of a given word.

## Installation

```bash
npm install word-prefixes
```

## Usage

```javascript
const getPrefixes = require('word-prefixes');

console.log(getPrefixes('prefix')); 
// Output: ['p', 'pr', 'pre', 'pref', 'prefi', 'prefix']

console.log(getPrefixes('a')); 
// Output: ['a']

console.log(getPrefixes('')); 
// Output: []

console.log(getPrefixes(123)); 
// Output: ['1', '12', '123']

// If a non-string or non-number is passed, an error will be thrown
try {
  console.log(getPrefixes({}));
} catch (error) {
  console.error(error.message); 
  // Output: Expected a string or a number
}
```

## Sample Results

### Input: `'prefix'`
```javascript
['p', 'pr', 'pre', 'pref', 'prefi', 'prefix']
```

### Input: `'a'`
```javascript
['a']
```

### Input: `''` (empty string)
```javascript
[]
```

### Input: `123` (number)
```javascript
['1', '12', '123']
```

### Input: `{}` (non-string/number)
```javascript
TypeError: Expected a string or a number
```

## License

MIT
