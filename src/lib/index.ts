export function doStuff(text: string, number: number): Record<string, number> {
	const words = text.split(' ')
	const processedWords: Record<string, number> = {}

	words.forEach((word, i) => {
		if (word.length !== number || processedWords[word]) {
			return
		}
		processedWords[word] = words.filter((w) => w === word).length
	})

	return processedWords
}
