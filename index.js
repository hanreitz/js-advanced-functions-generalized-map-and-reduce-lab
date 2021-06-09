// Add your functions here
function map (array, fn) {
  const returnArray = []
  for (let i = 0; i < array.length; i++) {
    returnArray.push(fn(array[i]))
  }
  return returnArray
}

function reduce (array, fn, startValue) {
  let runningTotal
  if (startValue) {
    runningTotal = startValue
    for (let i = 0; i < array.length; i++) {
      runningTotal = fn(array[i], runningTotal)
    }
  } else {
    runningTotal = array[0]
    for (let i = 1; i < array.length; i++) {
      runningTotal = fn(array[i], runningTotal)
    }
  }
  return runningTotal
}