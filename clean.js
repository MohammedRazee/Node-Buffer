// clean.js - removes generated output and the big test file. Already complete.
import { rmSync, mkdirSync } from 'node:fs';
import { dataPath, outPath } from './paths.js';

rmSync(outPath(''), { recursive: true, force: true });
mkdirSync(outPath(''), { recursive: true });
rmSync(dataPath('big.txt'), { force: true });
console.log('Cleaned ./output and removed data/big.txt');
