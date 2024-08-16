export function doStuff(text: string, n: number): Record<string, number> {
	const words = text.split(' ')
	const processedWords: Record<string, number> = {}

	words.forEach((word, _) => {
		if (word.length === n) {
			processedWords[word] = words.filter((w) => w === word).length
		}
	})

	return processedWords
}
