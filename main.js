function changeLast(arr,num) {
  arr[arr.length-1] = num;
}
const arr1 = [1, 2, 3];
const arr2 = [1, 2];
changeLast(arr1,5);
changeLast(arr2,5);

function addMeToEnd(arr) {
  arr.push("Colin")
}

addMeToEnd(arr1)
addMeToEnd(arr2)

function addMeToStart(arr) {
  arr.unshift("Colin")
}

addMeToStart(arr1)
addMeToStart(arr2)

function changeAllValuesTo(arr,value) {
  let i=0
  while (i< arr.length) {
  arr[i]= value;
  i++
  }
}
changeAllValuesTo(arr1,15)
changeAllValuesTo(arr2,30)

function oddOrEven(arr) {
  let i=0
  while (i< arr.length) {
    if (arr[i] % 2 === 0) {
      arr[i] = 'even'
    } else {
      arr[i] = 'odd'
    }
  
  i++
  }
}
oddOrEven(arr1);
oddOrEven(arr2);

function changeNextThreeToValue(a,arr,b) {
  let i=a;
  while (i<a+3) {
    arr[i] = b
    i++
  }
}


changeNextThreeToValue(2,arr1,15)
changeNextThreeToValue(1,arr2,15)

module.exports = {
  changeLast,
  addMeToEnd,
  addMeToStart,
  changeAllValuesTo,
  oddOrEven,
  changeNextThreeToValue,
}