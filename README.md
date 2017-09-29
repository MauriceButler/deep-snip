# deep-snip

Snip long strings in nested objects for logging


## example
`deepSnip(data [, length])`

``` javascript
var deepSnip = require('deep-snip');
var data = {
    foo: 'foo',
    bar: 'bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar',
};

deepSnip(data)

console.log(data.bar.length) // 100

deepSnip(data, 7)

console.log(data.bar.length) // 7

```
