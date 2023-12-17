
import zlibRaw from './zlib.min.js?raw'
export const Zlib = Function(`${zlibRaw}; return Zlib;`)()

// import puzzlinkRaw from './puzzlink.js?raw'
// export const Puzzlink = Function(`${puzzlinkRaw}; return Puzzlink;`)()
    
// import penpaStyleRaw from './penpa-legacy/penpa-style.js?raw'
// const penpaStyle = Function(`${penpaStyleRaw}; return {Color, set_surface_style, set_line_style, set_font_style, set_circle_style};`)()
// export const Color = penpaStyle.Color
// export const set_surface_style = penpaStyle.set_surface_style
// export const set_line_style = penpaStyle.set_line_style
// export const set_font_style = penpaStyle.set_font_style
// export const set_circle_style = penpaStyle.set_circle_style
// Object.defineProperty(window, 'Color', { value: penpaStyle.Color })
// Object.defineProperty(window, 'set_surface_style', { value: penpaStyle.set_surface_style })
// Object.defineProperty(window, 'set_line_style', { value: penpaStyle.set_line_style })
// Object.defineProperty(window, 'set_font_style', { value: penpaStyle.set_font_style })
// Object.defineProperty(window, 'set_circle_style', { value: penpaStyle.set_circle_style })

// import penpaPuzzleRaw from './penpa-legacy/penpa-puzzle.js?raw'
// const penpaPuzzle = Function(`${penpaPuzzleRaw}; return {Point, Stack, PenpaPuzzle, Puzzle_square, Puzzle_sudoku, Puzzle_kakuro};`)()
// export const Point = penpaPuzzle.Point
// export const Stack = penpaPuzzle.Stack
// export const PenpaPuzzle = penpaPuzzle.PenpaPuzzle
// export const Puzzle_square = penpaPuzzle.Puzzle_square
// export const Puzzle_sudoku = penpaPuzzle.Puzzle_sudoku
// export const Puzzle_kakuro = penpaPuzzle.Puzzle_kakuro
// Object.defineProperty(window, 'Point', { value: penpaPuzzle.Point })
// Object.defineProperty(window, 'Stack', { value: penpaPuzzle.Stack })
// Object.defineProperty(window, 'PenpaPuzzle', { value: penpaPuzzle.PenpaPuzzle })
// Object.defineProperty(window, 'Puzzle_square', { value: penpaPuzzle.Puzzle_square })
// Object.defineProperty(window, 'Puzzle_sudoku', { value: penpaPuzzle.Puzzle_sudoku })
// Object.defineProperty(window, 'Puzzle_kakuro', { value: penpaPuzzle.Puzzle_kakuro })
