const itParam = require('mocha-param');
const { expect } = require('chai');
const { odometer, odometerReverse, odometerVariableRadix } = require("./index");

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

describe("Odometer reverse function", function() {
  const cases = [
    {input: [4, 3, 9, 5], output: [4, 3, 9, 4]},
    {input: [4, 3, 4, 0], output: [4, 3, 3, 9]},
    {input: [4, 3, 0, 0], output: [4, 2, 9, 9]},
    {input: [4, 0, 0, 0], output: [3, 9, 9, 9]},
    {input: [0, 0, 0, 0], output: [9, 9, 9, 9]},
  ]
  itParam("should decrement array 'number'", cases, function({input, output}) {
    let result = odometerReverse(input)
    expect(result).to.eql(output)
  })
})

describe("Odometer radix agnostic function", function() {
  const hexadecimalCases = [
    {input: [4, 3, 9, 3], output: [4, 3, 9, 4], radix: 16},
    {input: [4, 3, 4, 9], output: [4, 3, 4, "A"], radix: 16},
    {input: [4, 3, 0, "A"], output: [4, 3, 0, "B"], radix: 16},
    {input: [3, 9, 0, "F"], output: [3, 9, 1, 0], radix: 16},
    {input: [3, 9, 9, "F"], output: [3, 9, "A", 0], radix: 16},
    {input: [3, 9, "A", "F"], output: [3, 9, "B", 0], radix: 16},
    {input: [3, 0, "F", "F"], output: [3, 1, 0, 0], radix: 16},
    {input: [3, 9, "F", "F"], output: [3, "A", 0, 0], radix: 16},
    {input: [3, "A", "F", "F"], output: [3, "B", 0, 0], radix: 16},
    {input: [0, "F", "F", "F"], output: [1, 0, 0, 0], radix: 16},
    {input: [9, "F", "F", "F"], output: ["A", 0, 0, 0], radix: 16},
    {input: ["A", "F", "F", "F"], output: ["B", 0, 0, 0], radix: 16},
    {input: ["F", "F", "F", "F"], output: [0, 0, 0, 0], radix: 16},
  ]
  itParam("should increment array 'number' given a radix of 16", hexadecimalCases, function({input, output, radix}) {
    let result = odometerVariableRadix(input, radix)
    expect(result).to.eql(output)
  })

  const decimalCases = [
    {input: [0, 0, 0, 0], output: [0, 0, 0, 1], radix: 10},
    {input: [4, 3, 9, 5], output: [4, 3, 9, 6], radix: 10},
    {input: [4, 3, 4, 9], output: [4, 3, 5, 0], radix: 10},
    {input: [4, 8, 9, 9], output: [4, 9, 0, 0], radix: 10},
    {input: [4, 9, 9, 9], output: [5, 0, 0, 0], radix: 10},
    {input: [9, 9, 9, 9], output: [0, 0, 0, 0], radix: 10},
  ]
  itParam("should increment array 'number' given a radix of 10", decimalCases, function({input, output, radix}) {
    let result = odometerVariableRadix(input, radix)
    expect(result).to.eql(output)
  })

  const octalCases = [
    {input: [4, 3, 4, 3], output: [4, 3, 4, 4], radix: 8},
    {input: [4, 3, 4, 7], output: [4, 3, 5, 0], radix: 8},
    {input: [4, 3, 7, 7], output: [4, 4, 0, 0], radix: 8},
    {input: [4, 7, 7, 7], output: [5, 0, 0, 0], radix: 8},
    {input: [7, 7, 7, 7], output: [0, 0, 0, 0], radix: 8},
  ]
  itParam("should increment array 'number' given a radix of 8", octalCases, function({input, output, radix}) {
    let result = odometerVariableRadix(input, radix)
    expect(result).to.eql(output)
  })
})