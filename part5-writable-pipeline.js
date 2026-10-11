// Part 5 - Writable streams, backpressure and pipeline()
// Run with:  npm run part5
// Complete each TODO. The three steps run one after another.
import { createReadStream, createWriteStream, statSync } from 'node:fs';
import { pipeline } from 'node:stream';
import { dataPath, outPath } from './paths.js';

// 5.1 Write 5000 lines ("line 0", "line 1", ...) to output/lines.txt and respect backpressure.
//   - create the stream with a deliberately small buffer: { highWaterMark: 1024 }
//   - out.write(...) returns false when the internal buffer is full
//   - when it returns false: STOP writing, wait for the 'drain' event, then continue
//   - when all lines are written call out.end()
//   - count how many times write() returned false, and how many 'drain' events you saw
//   - report in the 'finish' event, then call done()
function writeLines(done) {
  const TOTAL = 5000;
  const out = createWriteStream(outPath('lines.txt'), { highWaterMark: 1024 });
  let i = 0;
  let falseCount = 0;
  let drainCount = 0;

  function writeSome() {
    // TODO: loop while i < TOTAL and the last write() returned true
    //       if the buffer filled up and lines remain: out.once('drain', ...) and return
    //       if all lines are written: out.end()
  }

  // TODO: out.on('finish', () => { print TOTAL, falseCount, drainCount and the file size; done(); })

  writeSome();

  // (remove the next line once you have written the 'finish' handler above)
  done();
}

// 5.2 Copy data/students.ndjson to output/copy.ndjson using pipeline().
//   pipeline(source, destination, callback) - the callback receives an error or nothing.
//   In the callback, compare the sizes of both files with statSync(path).size
function copyFile(done) {
  // TODO
  done();
}

// 5.3 Run pipeline() with a source file that does not exist (data/does-not-exist.txt)
//   and the destination output/never.txt
//   Print the error code that arrives in the pipeline callback.
//   Afterwards, look inside the output folder. Does never.txt exist? (answer in your lab sheet)
function copyMissing() {
  // TODO
}

writeLines(() => copyFile(copyMissing));
