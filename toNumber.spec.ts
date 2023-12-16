
import { toNumber } from "./toNumber";

describe('.toNumber() function tests', () => {
    const numbersInSwedish = {
        "noll": 0, "ett": 1, "två": 2, "tre": 3, "fyra": 4,
        "fem": 5, "sex": 6, "sju": 7, "åtta": 8, "nio": 9,
        "tio": 10, "elva": 11, "tolv": 12, "tretton": 13, "fjorton": 14,
        "femton": 15, "sexton": 16, "sjutton": 17, "arton": 18, "nitton": 19,
        "tjugo": 20, "tjugoett": 21, "tjugotvå": 22, "tjugotre": 23, "tjugofyra": 24,
        "tjugofem": 25, "tjugosex": 26, "tjugosju": 27, "tjugoåtta": 28, "tjugonio": 29,
        "trettio": 30, "trettioett": 31, "trettiotvå": 32, "trettiotre": 33, "trettiofyra": 34,
        "trettiofem": 35, "trettiosex": 36, "trettiosju": 37, "trettioåtta": 38, "trettionio": 39,
        "fyrtio": 40, "fyrtioett": 41, "fyrtiotvå": 42, "fyrtiotre": 43, "fyrtiofyra": 44,
        "fyrtiofem": 45, "fyrtiosex": 46, "fyrtiosju": 47, "fyrtioåtta": 48, "fyrtionio": 49,
        "femtio": 50, "femtioett": 51, "femtiotvå": 52, "femtiotre": 53, "femtiofyra": 54,
        "femtiofem": 55, "femtiosex": 56, "femtiosju": 57, "femtioåtta": 58, "femtionio": 59,
        "sextio": 60, "sextioett": 61, "sextiotvå": 62, "sextiotre": 63, "sextiofyra": 64,
        "sextiofem": 65, "sextiosex": 66, "sextiosju": 67, "sextioåtta": 68, "sextionio": 69,
        "sjuttio": 70, "sjuttioett": 71, "sjuttiotvå": 72, "sjuttiotre": 73, "sjuttiofyra": 74,
        "sjuttiofem": 75, "sjuttiosex": 76, "sjuttiosju": 77, "sjuttioåtta": 78, "sjuttionio": 79,
        "åttio": 80, "åttioett": 81, "åttiotvå": 82, "åttiotre": 83, "åttiofyra": 84,
        "åttiofem": 85, "åttiosex": 86, "åttiosju": 87, "åttioåtta": 88, "åttionio": 89,
        "nittio": 90, "nittioett": 91, "nittiotvå": 92, "nittiotre": 93, "nittiofyra": 94,
        "nittiofem": 95, "nittiosex": 96, "nittiosju": 97, "nittioåtta": 98, "nittionio": 99,
        "etthundra": 100, "etthundraett": 101, "etthundratvå": 102, "etthundratre": 103, "etthundrafyra": 104,
        "etthundrafem": 105, "etthundrasex": 106, "etthundrasju": 107, "etthundraåtta": 108, "etthundranio": 109,
        "tvåhundranittiosju": 297, "trehundrafemtiosex": 356, "fyrahundrasextiofem": 465, "femhundrasjuttiofyra": 574,
    };

    Object.entries(numbersInSwedish).forEach(([word, number]) => {
        test(`should convert "${word}" to ${number}`, () => {
            expect(toNumber(word)).toBe(number);
        });
    });

    // Exempel för mer komplexa tal
    test('should convert "femtiosju" to 57', () => {
        expect(toNumber("femtiosju")).toBe(57);
    });

    // Exempel för mer komplexa tal
    test('should convert "etthundrafemtiosex" to 156', () => {
        expect(toNumber("etthundrafemtiosex")).toBe(156);
    });

    test('should convert "niohundranittionio" to 999', () => {
        expect(toNumber("niohundranittionio")).toBe(999);
    });

    // Lägg till fler tester här för att täcka upp till 1000
});