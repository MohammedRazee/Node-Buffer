// line-splitter.js - provided helper (ES6 module). Already complete: do not edit.
//
// A Transform stream that turns raw byte chunks into ONE STRING PER LINE.
// Chunks never line up with line endings, so it keeps the unfinished last line
// ("leftover") and glues it to the front of the next chunk.
// StringDecoder solves the Part 4 problem: a multi-byte character split across
// two chunks is held back until the rest of its bytes arrive.
import { Transform } from 'node:stream';
import { StringDecoder } from 'node:string_decoder';

export class LineSplitter extends Transform {
  constructor() {
    super({ readableObjectMode: true }); // output side emits strings (objects), not bytes
    this.decoder = new StringDecoder('utf8');
    this.leftover = '';
  }

  _transform(chunk, encoding, callback) {
    this.leftover += this.decoder.write(chunk);
    const lines = this.leftover.split('\n');
    this.leftover = lines.pop(); // the last piece may be an unfinished line
    for (const line of lines) {
      if (line.length > 0) this.push(line);
    }
    callback();
  }

  _flush(callback) {
    this.leftover += this.decoder.end();
    if (this.leftover.length > 0) this.push(this.leftover);
    callback();
  }
}
