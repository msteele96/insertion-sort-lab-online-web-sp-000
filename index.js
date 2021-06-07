function findMinAndRemove(array){
  let min = array[0]
  let minIndex = 0
  for (var i = 0; i < array.length; i++) {
    if (array[i] < min) {
      min = array[i]
      minIndex = i
    }
  }
  return min
}

function selectionSort(array){

}
