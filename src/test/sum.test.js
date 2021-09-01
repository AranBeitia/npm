const sum = require('../js/sum')

test('adds 1 + 2 to equal 3', () => {
  expect(sum.sum(1, 2)).toBe(3)
})

test('add a message to equal hello kitty', () => {
  const salute = 'Hello kitty'
  expect(sum.message(salute)).toBe(salute)
})