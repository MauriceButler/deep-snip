var test = require('tape');
var deepSnip = require('../');

function getData() {
    return {
        foo: 'foo',
        bar: 'bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar bar',
    };
}

test('snips simple', function (t) {
    t.plan(1);

    var data = getData();

    deepSnip(data);

    t.equal(data.bar.length, 100, 'trimmed correctly');
});

test('snips deep', function (t) {
    t.plan(2);

    var data = getData();
    data.nested = getData();

    deepSnip(data);
    t.equal(data.bar.length, 100, 'trimmed correctly level 1');
    t.equal(data.nested.bar.length, 100, 'trimmed correctly level 2');
});
