const {shuffleArray} = require('./utils')

describe('shuffleArray should', () => {
    
    it('returns an array', () => {
        const expected = [];
        expect(shuffleArray(expected)).toEqual([])
    })

    it('be the same length as argument sent in', () => {
        const argument = shuffleArray()
        expect(shuffleArray().length).toEqual(argument().length)
    })

})