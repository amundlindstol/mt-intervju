import { describe, expect, test } from 'vitest'
import { doStuff } from '$lib'
import { bible } from './bible'

describe('Test stuff', () => {
	test('should count', () => {
		const res = doStuff('a b c a', 1)
		expect(res.a).toBe(2)
	})

	test('should not count', () => {
		const res = doStuff('a b c a', 2)
		expect(Object.entries(res).length).toBe(0)
	})

	test('should ignore signs', () => {
		const res = doStuff('hello there, my guy', 5)
		expect(res).toBe({ hello: 1, there: 1 })
	})

	test('should ignore capitalization', () => {
		const res = doStuff('Hello hello', 5)
		expect(res).toBe({ hello: 2 })
	})

	test.skip('gotta go fast', () => {
		const start = Date.now()
		const res = doStuff(bible, 1)
		const end = Date.now()
		console.log(`Took ${end - start}ms`)
	})
})
