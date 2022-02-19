
const isAnagram = require('./functions')

test("isAnagram function exists", () => {
    expect(typeof isAnagram.isFunction(isAnagram.anagram)).toEqual('function');
});

test("cinema is an anagram of iceman", () => {
    expect(isAnagram.anagram('cinema', 'iceman')).toBeTruthy();
});

test("Dormitory is an anagram of dirty room##", () => {
    expect(isAnagram.anagram('Dormitory', 'dirty room##')).toBeTruthy();
});

test("Hello is NOT an anagram of Aloha", () => {
    expect(isAnagram.anagram('Hello', 'Aloha')).toBeFalsy();
});