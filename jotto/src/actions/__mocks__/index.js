import { jest } from '@jest/globals'

module.exports = {
	...jest.requireActual('..'),
	__esModule: true,
	getSecretWord: jest.fn().mockReturnValue({ type: 'MOCK' })
}