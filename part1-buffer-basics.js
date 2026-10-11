// Part 1 - Buffer basics
// Run with:  npm run part1
// Replace every  null  below with your own code, then run the file again.

// 1.1 Create a Buffer from the string 'Node'.
//     Expected: <Buffer 4e 6f 64 65>, length 4, first byte 78
const buf1 = null; // TODO
console.log('1.1 buffer       :', buf1);
console.log('1.1 length       :', buf1?.length);
console.log('1.1 first byte   :', buf1?.[0], '(the character code of "N")');

// 1.2 Bytes are not characters.
//     How many characters and how many bytes (utf8) are in 'héllo €' ?
const text = 'héllo €';
const charCount = null; // TODO: number of characters
const byteCount = null; // TODO: number of bytes (hint: Buffer.byteLength)
console.log('1.2 characters   :', charCount);
console.log('1.2 bytes (utf8) :', byteCount);
console.log('1.2 buffer       :', Buffer.from(text));

// 1.3 Allocate a 4-byte Buffer with Buffer.alloc(4), then
//     - put 72 at index 0 and 105 at index 1 (using [ ] like an array)
//     - write the string '!!' starting at index 2   (hint: buf.write(string, offset))
//     Expected: <Buffer 48 69 21 21> -> Hi!!
//     Then fill the whole Buffer with the number 46 (hint: buf.fill).
const buf3 = Buffer.alloc(4);
// TODO: set index 0 and 1
// TODO: write '!!' at offset 2
console.log('1.3 after writes :', buf3, '->', buf3.toString());
// TODO: fill with 46
console.log('1.3 after fill   :', buf3, '->', buf3.toString());

// 1.4 Encodings.
//     Show the hex and base64 form of 'Hello, Node!'
//     then decode the base64 text 'SGVsbG8sIE5vZGUh' back to a normal string.
const msg = Buffer.from('Hello, Node!');
const hex = null; // TODO: msg.toString(???)
const b64 = null; // TODO
const decoded = null; // TODO: Buffer.from(text, ???).toString(???)
console.log('1.4 hex          :', hex);
console.log('1.4 base64       :', b64);
console.log('1.4 decoded      :', decoded);
