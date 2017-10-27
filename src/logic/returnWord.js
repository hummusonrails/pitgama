'use strict'

// export default function returnWord(data, word) {
//     let filteredArr = [];
//
//     for (var i = 0; i < data.length; i++) {
//         if (data[i].includes(word)) {
//             filteredArr.push(data[i])
//         }
//     }
//     return filteredArr;
//   }

  export default function returnWord(data, word) {
    let filteredArr = [];
        if (data.search(word) >= 0) {
            filteredArr.push(data)
        }
    return filteredArr;
}
