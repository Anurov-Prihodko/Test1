const sortArray = (array) => {
  for (let i = 0; i < array.length - 1; i += 1) {
    let minIndex = i

    for (let j = minIndex; j < array.length; j += 1) {
      if (array[j] < array[minIndex]) {
        minIndex = j
      }
    }

    let currentValue = array[minIndex]
    array[minIndex] = array[i]
    array[i] = currentValue
  }
  return array
}

// console.log(sortArray([24, 56, 30, 2, 12, 5]))

const sortArray2 = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1; j++) {
      if (arr[j + 1] < arr[j]) {
        let temp = arr[j + 1]
        arr[j + 1] = arr[j]
        arr[j] = temp
      }
    }
  }
  return arr
}

console.log(sortArray2([24, 56, 30, 2, 12, 5]))
