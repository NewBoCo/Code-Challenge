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
  const carryNumber = parseInt(10, radix) - 1
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
  }

   return array
}

module.exports = { odometer, odometerReverse, odometerVariableRadix };