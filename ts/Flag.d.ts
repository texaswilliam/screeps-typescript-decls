declare class Flag extends RoomObject {
    color: Color;
    memory: FlagMem;
    name: FlagName;
    secondaryColor: Color;

    remove(): ErrCode;
    setColor(color: Color, secondaryColor?: Color): ErrCode;
    
    setPosition(x: number, y: number): ErrCode;
    setPosition(pos: XYR | HasXYR): ErrCode;
}
