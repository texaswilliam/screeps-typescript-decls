declare class RoomPosition implements XYR {
    x: number;
    y: number;
    roomName: RoomName;

    constructor(x: number, y: number, roomName: RoomName);

    createConstructionSite(structureType: StructureType): ErrCode;

    createFlag(name?: string, color?: Color, secondaryColor?: Color) : string | ErrCode;

    findClosestByPath(type: FindType, opts?: FilterOpt<RoomObject> & AlgorithmOpt & FindPathOpts): RoomObject;
    findClosestByPath<T extends XYR>(objects: T[], opts?: FilterOpt<T> & AlgorithmOpt & FindPathOpts): T;
    findClosestByPath<T extends HasXYR>(objects: T[], opts?: FilterOpt<T> & AlgorithmOpt & FindPathOpts): T;

    findClosestByRange(type: FindType, opts?: FilterOpt<RoomObject>): RoomObject;
    findClosestByRange<T extends XYR>(objects: T[], opts?: FilterOpt<T>): T;
    findClosestByRange<T extends HasXYR>(objects: T[], opts?: FilterOpt<T>): T;

    findInRange(type: FindType, range: number, opts?: FilterOpt<RoomObject>): RoomObject[];
    findInRange<T extends XYR>(objects: T[], range: number, opts?: FilterOpt<T>): T[];
    findInRange<T extends HasXYR>(objects: T[], range: number, opts?: FilterOpt<T>): T[];

    findPathTo(x: number, y: number, opts?: FindPathOpts): PathStep[];
    findPathTo(target: XYR | HasXYR, opts?: FindPathOpts): PathStep[];

    getDirectionTo(x: number, y: number): Direction;
    getDirectionTo(target: XYR | HasXYR): Direction;

    getRangeTo(x: number, y: number): number;
    getRangeTo(target: XYR | HasXYR): number;

    inRangeTo(x: number, y: number, range: number): boolean;
    inRangeTo(target: XYR | HasXYR, range: number): boolean;

    isEqualTo(x: number, y: number): boolean;
    isEqualTo(target: XYR | HasXYR, range: number): boolean;

    isNearTo(x: number, y: number): boolean;
    isNearTo(target: XYR | HasXYR): boolean;

    look(): LookObject[];

    lookFor(type: "constructionSite"): ConstructionSite[];
    lookFor(type: "creep"): Creep[];
    lookFor(type: "energy"): Resource[];
    lookFor(type: "flag"): Flag[];
    lookFor(type: "mineral"): Mineral[];
    lookFor(type: "nuke"): Nuke[];
    lookFor(type: "resource"): Resource[];
    lookFor(type: "source"): Source[];
    lookFor(type: "structure"): Structure[];
    lookFor(type: "terrain"): TerrainType[];
}
