function deepSnip(data, length = 100) {
    for (var key in data) {
        var value = data[key];
        var type = typeof value;

        if (value != null && type === 'object') {
            deepSnip(data[key], length);
        }

        if (type === 'string' && value.length > 100) {
            data[key] = value.substring(0, 100);
        }
    }
}

module.exports = deepSnip;
