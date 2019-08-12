const itParam = require('mocha-param');
const { expect } = require('chai');
const { odometer } = require("./index");

describe("Odometer function", function() {
  const cases = [
    {input: [0, 0, 0, 0], output: [0, 0, 0, 1]},
    {input: [4, 3, 9, 5], output: [4, 3, 9, 6]},
    {input: [4, 3, 4, 9], output: [4, 3, 5, 0]},
    {input: [4, 8, 9, 9], output: [4, 9, 0, 0]},
    {input: [4, 9, 9, 9], output: [5, 0, 0, 0]},
    {input: [9, 9, 9, 9], output: [0, 0, 0, 0]},
  ]
  itParam("should increment array 'number'", cases, function({input, output}) {
    let result = odometer(input)
    expect(result).to.eql(output)
  })
})