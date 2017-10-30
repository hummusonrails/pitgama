export default function returnWordInArr(data, word) {
    let filteredArr = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].includes(word)) {
            filteredArr.push(data[i])
        }
    }
    return filteredArr;
  }
