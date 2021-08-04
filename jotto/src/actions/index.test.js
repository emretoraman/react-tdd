import { afterEach, beforeEach, describe, expect, test } from '@jest/globals'
import moxios from 'moxios'
import { getSecretWord } from './index'
import { storeFactory } from '../../test/testUtils'

describe('getSecretWord', () => {
	beforeEach(() => {
		moxios.install()
	})
	afterEach(() => {
		moxios.uninstall()
	})

	test('secretWord is returned', async () => {
		const store = storeFactory()
		moxios.wait(() => {
			const request = moxios.requests.mostRecent()
			request.respondWith({
				status: 200,
				response: 'party'
			})
		})

		await store.dispatch(getSecretWord())
		const { secretWord } = store.getState()
		expect(secretWord).toBe('party')
	})
})