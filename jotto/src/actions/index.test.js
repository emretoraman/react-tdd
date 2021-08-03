import { afterEach, beforeEach, describe, expect, test } from '@jest/globals'
import moxios from 'moxios'
import { getSecretWord } from './index'

describe('getSecretWord', () => {
	beforeEach(() => {
		moxios.install()
	})
	afterEach(() => {
		moxios.uninstall()
	})

	test('secretWord is returned', () => {
		moxios.wait(() => {
			const request = moxios.requests.mostRecent()
			request.respondWith({
				status: 200,
				response: 'party'
			})
		})

		//TODO: update to test app in redux / context sections
		return getSecretWord()
			.then((secretWord) => {
				expect(secretWord).toBe('party')
			})
	})
})