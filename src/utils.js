const utils = {};

Array.prototype.limitTo = function(count) {
	const arr = [];
	for(var i = 0; i < count; i++) {
		arr.push(this[i]);
	}
	return arr;
}

export default utils;
