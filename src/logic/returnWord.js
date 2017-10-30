  export default function returnWord(data, word) {
    let filteredArr = [];
        if (data.search(word) >= 0) {
            filteredArr.push(data)
        }
    return filteredArr;
}
