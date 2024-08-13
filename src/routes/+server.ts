import { error, json } from '@sveltejs/kit'
import { doStuff } from '$lib'

export async function POST(event) {
	const data = await event.request.formData()
	const text = data.get('text')
	const number = Number(data.get('number'))
	if (typeof text !== 'string' || number <= 0) {
		throw error(400, { message: 'feil input' })
	}

	console.time('server response time')
	const processedWords = doStuff(text, number)
	console.timeEnd('server response time')

	return json(Object.entries(processedWords).sort((a, b) => b[1] - a[1]))
}
