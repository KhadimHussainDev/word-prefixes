function getPrefixes(word) {
	if (typeof word === "number") {
		word = word.toString();
	}
	if (typeof word !== "string") {
		throw new TypeError("Expected a string");
	}

	let prefixes = [];
	for (let i = 1; i <= word.length; i++) {
		prefixes.push(word.substring(0, i));
	}

	return prefixes;
}

module.exports = getPrefixes;
