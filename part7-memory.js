// Part 7 (stretch) - readFile vs stream: how much memory?
//   npm run part7:make        creates data/big.txt (200 MB by default)
//   npm run part7:readfile    loads it all with fs.readFile
//   npm run part7:stream      reads it with a stream
//   npm run clean             deletes the big file afterwards
// Optional: SIZE_MB=100 npm run part7:make     (use a smaller number on a low-disk machine)
//
// Your job: finish the TODO in measure(), run both modes, and record the numbers in your lab sheet.
import { createReadStream, createWriteStream, readFile, existsSync, statSync } from 'node:fs';
import { dataPath } from './paths.js';

const mode = process.argv[2];
const SIZE_MB = Number(process.env.SIZE_MB ?? 200);
const bigFile = dataPath('big.txt');
const mb = (bytes) => (bytes / 1024 / 1024).toFixed(1);

if (mode === 'make') {
  makeBigFile();
} else if (mode === 'readfile' || mode === 'stream') {
  if (!existsSync(bigFile)) {
    console.error('big.txt not found. Run: npm run part7:make');
    process.exit(1);
  }
  measure(mode);
} else {
  console.log('Usage: node part7-memory.js make | readfile | stream');
}

// Already complete: writes SIZE_MB megabytes using a writable stream (with backpressure)
function makeBigFile() {
  const out = createWriteStream(bigFile);
  const oneMB = ('x'.repeat(99) + '\n').repeat(10486); // about 1 MB of text
  let written = 0;

  function writeSome() {
    let ok = true;
    while (written < SIZE_MB && ok) {
      ok = out.write(oneMB);
      written++;
    }
    if (written < SIZE_MB) out.once('drain', writeSome);
    else out.end();
  }
  out.on('finish', () => console.log('Created big.txt:', mb(statSync(bigFile).size), 'MB'));
  writeSome();
}

function measure(which) {
  const baseline = process.memoryUsage.rss(); // memory used by Node right now
  const fileSize = statSync(bigFile).size;
  console.log(`mode: ${which} | file: ${mb(fileSize)} MB | memory before: ${mb(baseline)} MB`);

  if (which === 'readfile') {
    // TODO: use readFile(bigFile, (err, data) => { ... })
    //       print data.length, the memory after loading, and the growth (after - baseline)
    //       memory after loading = process.memoryUsage.rss()
  } else {
    // TODO: use createReadStream(bigFile)
    //       on every 'data' chunk: add chunk.length to a byte counter and
    //       update  peak = Math.max(peak, process.memoryUsage.rss())
    //       on 'end': print the bytes streamed, the peak memory, and the growth (peak - baseline)
    let peak = baseline;
    let bytes = 0;
  }
}
