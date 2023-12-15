export function PenpaGeneral(fakedoc: any): {
    decode_puzzlink: (...args: any[]) => Puzzle_square;
    load: (...args: any[]) => Puzzle_square;
    create: (...args: any[]) => Puzzle_square;
};
import { Puzzle_square } from './penpa-puzzle';
