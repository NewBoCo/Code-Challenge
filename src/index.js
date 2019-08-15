odometer = function(array) {
  let addOne = true

  for (let i = array.length; i--; i > -1) {
    let digit = array[i]

    if (digit === 9 && addOne) {
      array[i] = 0
      addOne = true
    } else if (addOne) {
      array[i] += 1
      addOne = false
    }
  }

  return array
}

odometerReverse = function(array) {
  let minusOne = true

  for (let i = array.length - 1; i > -1; i--) {
    let digit = array[i]

    if (digit === 0 && minusOne) {
      array[i] = 9
      minusOne = true
    } else if (minusOne) {
      array[i] -= 1
      minusOne = false
    }
  }

  return array
}

const odometerVariableRadix = function(array, radix) {
  //assuming index 0 can set the expected return type because they should all be strings OR integers
  const returnType = typeof array[0]
  const carryNumber = parseInt(10, radix) - 1
  let revertToStringValues = false

  let addOne = true
   for (let i = array.length; i--; i > -1) {
    let digit = parseInt(array[i], radix)

     if (digit === carryNumber && addOne) {
      array[i] = 0
      addOne = true
    } else if (addOne) {
      array[i] = digit += 1
      addOne = false
    }

		//convert back to base characters
		if (array[i] > 9){
      array[i] = Number(digit).toString(radix).toUpperCase()
    }

    //only change type if it does not match the returnType
    console.log(returnType)
    if (returnType === "number") {
      let parseValue = parseInt(array[i], 10)
        //if a string cannot be parsed as an integer, default to string values.
        if (isNaN(parseValue)) {
          revertToStringValues = true
        } else {
          array[i] = parseValue
        }
    }
  }

  console.log(revertToStringValues || returnType === "string")
  if (revertToStringValues || returnType === "string") {
    for (i = 0; i < array.length; i++) {
      array[i] = array[i].toString(radix)
    }
  }

   return array
}

module.exports = { odometer, odometerReverse, odometerVariableRadix };