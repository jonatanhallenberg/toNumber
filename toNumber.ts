export const toNumber = function (wordToConvert: string) {
    const singles = {
        "noll": 0, "ett": 1, "två": 2, "tre": 3, "fyra": 4,
        "fem": 5, "sex": 6, "sju": 7, "åtta": 8, "nio": 9,
    };

    const doubles = {
        "tio": 10, "elva": 11, "tolv": 12, "tretton": 13, "fjorton": 14,
        "femton": 15, "sexton": 16, "sjutton": 17, "arton": 18, "nitton": 19,
    };

    const tens = {
        "tjugo": 20, "trettio": 30, "fyrtio": 40, "femtio": 50,
        "sextio": 60, "sjuttio": 70, "åttio": 80, "nittio": 90, "hundra": 100, "tusen": 1000
    };

    type Match = {
        value: number,
        word: string
    }

    const getValue = function (wordToConvert: string): Match {
        const tensKeys = Object.keys(tens);
        const matchingTens = tensKeys.find(key => wordToConvert.startsWith(key));

        if (matchingTens) {
            return { value: tens[matchingTens], word: matchingTens };
        }

        const doublesKeys = Object.keys(doubles);
        const matchingDoubles = doublesKeys.find(key => wordToConvert.startsWith(key));

        if (matchingDoubles) {
            return { value: doubles[matchingDoubles], word: matchingDoubles };
        }

        const singlesKeys = Object.keys(singles);
        const matchingSingles = singlesKeys.find(key => wordToConvert.startsWith(key));

        if (matchingSingles) {
            return { value: singles[matchingSingles], word: matchingSingles };
        }

        throw new Error(`Could not find a match for ${wordToConvert}`);
    }

    let numberParts: number[] = [];
    let i = 0;



    try {
        while (wordToConvert.length > 0) {
            const { value, word } = getValue(wordToConvert);

            numberParts.push(value);

            wordToConvert = wordToConvert.slice(word.length);
            i += 1;
        }
    } catch (error) {
        return NaN;
    }

    // [3] => 5
    // [1, 1000, 1, 100, 2] => 1102
    // [1, 1000, 1, 100, 13] => 1113
    // [2, 1000, 3, 100, 5] => 2305

    const sumNumberParts = numberParts.reduce((sum, number, index) => {
        if (numberParts[index + 1] === 1000 || numberParts[index + 1] === 100) {
            return sum + number * numberParts[index + 1];
        }

        if (number === 1000 || number === 100) {
            return sum;
        }

        return sum + number;
    }, 0);

    return sumNumberParts;

};