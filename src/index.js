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

module.exports = { odometer };