export class AppVersion
{
    static version = '0.33.0';
    static name = 'SudokuPad Penpa+ Importer';
    static getAppTitle() {    
        return `${AppVersion.name} v${AppVersion.version}`;
    }
}
