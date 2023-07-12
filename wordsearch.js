const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (l of horizontalJoin) {
        if (l.includes(word)) return true
    }

    //Go through each column of the letters
    for (let x = 0; x < letters[0].length; x++) {
        
        let column = "";
        
        for (let y = 0; y < letters[x].length; y++) {
            column += letters[y][x];
        }

        if (column.includes(word)) return true
    }
    return false;
}

module.exports = wordSearch