import fpuzzlesdecoderRaw from './sudokupad-legacy/fpuzzlesdecoder.min.js?raw'
export const loadFPuzzle = Function(`${fpuzzlesdecoderRaw}; return loadFPuzzle;`)()
    
import puzzleLoaderRaw from './sudokupad-legacy/puzzleloader.js?raw'
export const PuzzleLoader = Function(`${puzzleLoaderRaw}; return PuzzleLoader;`)()
    
import puzzleToolsRaw from './sudokupad-legacy/puzzletools.js?raw'
export const PuzzleTools = Function(`${puzzleToolsRaw}; return PuzzleTools;`)()
    
import puzzleZipperRaw from './sudokupad-legacy/puzzlezipper.js?raw'
export const PuzzleZipper = Function(`${puzzleZipperRaw}; return PuzzleZipper;`)()

import utilitiesRaw from './sudokupad-legacy/utilities.js?raw'
const utilities = Function(`${utilitiesRaw}; return { md5Digest };`)()
export const md5Digest = utilities.md5Digest;

// md5Digest is used as global in fpuzzlesdecoder.js and puzzleloader.js
Object.defineProperty(window, 'md5Digest', { value: utilities.md5Digest })
