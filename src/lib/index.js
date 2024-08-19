// @ts-nocheck
export function doStuff(text, n) {
	let words = text.split(' ')
	let processedWords = {}

	words.forEach((word) => {
		if (word.length === n) {
			processedWords[word] = words.filter((w) => w === word).length
		}
	})

	return processedWords
}
