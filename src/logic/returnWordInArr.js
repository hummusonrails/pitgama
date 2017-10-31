export default function returnWordInArr(data, word, word2) {
    let filteredArr = [];

    for (var i = 0; i < data.length; i++) {
        if (data[i].includes(word)) {
            filteredArr.push(data[i])
        } else if (data[i].includes(word2)) {
          filteredArr.push(data[i])
        }
    }
    return filteredArr;
  }
