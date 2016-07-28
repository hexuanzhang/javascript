if (typeof Object.is != 'function') {
	Object.defineProperty(Object, "is", {
		value: function(x, y) {
			if (x === y) { // +0 === -0
				return x !== 0 || 1 / x === 1 / y;
			} else { // Nan === NAN
				return x !== x && y !== y;
			}
		},
		configurable: true,
		writable: true,
		enumerable: false
	});
}