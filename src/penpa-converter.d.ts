export class PenpaConverter {
    static settings: Dictionary;
    static flags: Dictionary;
    static ParseUrlSettings(): void;
    static isDoubleLayer: (ctx: any) => boolean;
    static isPenpaUrl: (url: any) => any;
    static loadPenpaPuzzle: (urlstring: any) => import("./penpa-loader/penpa-puzzle").Puzzle_square;
    static convertPenpaPuzzle: (pu: any) => {
        id: string;
        settings: {};
    };
}
