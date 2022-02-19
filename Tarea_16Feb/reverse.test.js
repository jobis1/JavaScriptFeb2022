const reverse = require('./functions');

test('reverseString function exists', () => {
    expect(reverse.isFunction(reverse.isFunction)).toBeDefined();
});

test('String reverses', () => {
    expect(reverse.reversestring('hello')).toEqual('olleh');
});

test('String reverses with uppercase', () => {
    expect(reverse.reversestring('Hello')).toEqual('olleH');
});