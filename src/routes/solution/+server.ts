import { error, json } from '@sveltejs/kit'

function fastWordCount(text: string, number: number) {
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

export async function POST(event) {
	console.time('server response time faster')
	const data = await event.request.formData()
	const text = data.get('text')
	const number = Number(data.get('number'))
	if (typeof text !== 'string' || number <= 0) {
		throw error(400, { message: 'feil input' })
	}

	const processedWords = fastWordCount(text, number)

	console.timeEnd('server response time faster')
	return json(Object.entries(processedWords).sort((a, b) => b[1] - a[1]))
}
