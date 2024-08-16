export function fastWordCount(text: string, number: number) {
	const words = text.split(/[^a-zA-Z]+/)
	const processedWords: Record<string, number> = {}

	words.forEach((word) => {
		if (word.length !== number) {
			return
		}
		const wordLower = word.toLowerCase()
		if (!processedWords[wordLower]) {
			processedWords[wordLower] = 1
		} else {
			processedWords[wordLower] = processedWords[wordLower] + 1
		}
	})
	return processedWords
}
