const PlatziMath = {}


PlatziMath.getAverage = function getAverage(list) {
  const listSum = list.reduce((acc, current) => acc + current);

  const average = listSum / list.length;
  console.log(average);
  return average;
}

PlatziMath.isEven = function isEven(arr) { // checks if an array is even or odd
  return arr.length % 2 === 0;
}

PlatziMath.getMode = function getMode(list) {
  const countList = {};

  for (let i = 0; i < list.length; i++) {
    const element = list[i];
    if (countList[element]) {
      countList[element] += 1
    } else {
      countList[element] = 1;
    }
  }

  const arrayList = Object.entries(countList)
  const sortedList = sortListBidimensional(arrayList, 1)
  const maxNumberList = sortedList[sortedList.length - 1]
  const moda = maxNumberList[0]

  return moda
}


PlatziMath.getMedian = function getMedian(unorderedList) {
  const arr = PlatziMath.sortList(unorderedList);
  const arrIsEven = PlatziMath.isEven(arr);
  
  if (arrIsEven) {
    const midElement1 = arr[(arr.length / 2) - 1];
    const midElement2 = arr[arr.length / 2];
    
    const medianAverage = PlatziMath.getAverage([midElement1,midElement2])

    return medianAverage;
  } else {
    const arrMiddleIndex = Math.floor(arr.length / 2);
    const arrMiddleOdd = arr[arrMiddleIndex];
    console.log(arr[arrMiddleIndex]);
    return arrMiddleOdd;
  }
}

PlatziMath.sortList = function sortList(unorderedList) {
  const lista = unorderedList.sort((a,b) => a - b)
  return lista;
}

PlatziMath.sortListBidimensional = function sortListBidimensional(unorderedList, i) {
const lista = unorderedList.sort((a,b) => a[i] - b[i])
  return lista;
}