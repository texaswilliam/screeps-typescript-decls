declare class Room {
    controller: StructureController;
    energyAvailable: number;
    energyCapacityAvailable: number;
    memory: RoomMem;
    mode: "MODE_ARENA" | "MODE_SIMULATION" | "MODE_SURVIVAL" | "MODE_WORLD";
    name: RoomName;
    storage: StructureStorage;
    terminal: StructureTerminal;

    createConstructionSite(x: number, y: number, structureType: StructureType): ErrCode;
    createConstructionSite(pos: XYR | HasXYR, structureType: StructureType): ErrCode;

    createFlag(x: number, y: number, name?: string, color?: Color, secondaryColor?: Color): string | ErrCode;
    createFlag(pos: XYR | HasXYR, name?: string, color?: Color, secondaryColor?: Color): string | ErrCode;

    find(type: FindType, opts?: FilterOpt<FindU>): FindArrU;
    findExitTo(room: string | Room): FindExit | ErrCode;
    findPath(fromPos: XYR | HasXYR, toPos: XYR | HasXYR, opts?: FindPathOpts): PathStep[];
    getPositionAt(x: number, y: number): RoomPosition;

    lookAt(x: number, y: number): LookObject[];
    lookAt(target: XYR | HasXYR): LookObject[];

    lookAtArea(top: number, left: number, bottom: number, right: number): YX<LookObject>;

    lookAtArea(top: number, left: number, bottom: number, right: number, asArray: boolean): YX<LookObject> | ({ x: number; y: number; } & LookObject)[];

    lookForAt(type: "constructionSite", x: number, y: number): ConstructionSite[];
    lookForAt(type: "creep", x: number, y: number): Creep[];
    lookForAt(type: "energy", x: number, y: number): Resource[];
    lookForAt(type: "flag", x: number, y: number): Flag[];
    lookForAt(type: "mineral", x: number, y: number): Mineral[];
    lookForAt(type: "nuke", x: number, y: number): Nuke[];
    lookForAt(type: "resource", x: number, y: number): Resource[];
    lookForAt(type: "source", x: number, y: number): Source[];
    lookForAt(type: "structure", x: number, y: number): StructureU[];
    lookForAt(type: "terrain", x: number, y: number): TerrainType[];

    lookForAtArea(type: "constructionSite", top: number, left: number, bottom: number, right: number): YX<[ConstructionSite]>;
    lookForAtArea(type: "creep", top: number, left: number, bottom: number, right: number): YX<[Creep]>;
    lookForAtArea(type: "energy", top: number, left: number, bottom: number, right: number): YX<Resource[]>;
    lookForAtArea(type: "flag", top: number, left: number, bottom: number, right: number): YX<Flag[]>;
    lookForAtArea(type: "mineral", top: number, left: number, bottom: number, right: number): YX<Mineral[]>;
    lookForAtArea(type: "nuke", top: number, left: number, bottom: number, right: number): YX<Nuke[]>;
    lookForAtArea(type: "resource", top: number, left: number, bottom: number, right: number): YX<Resource[]>;
    lookForAtArea(type: "source", top: number, left: number, bottom: number, right: number): YX<[Source]>;
    lookForAtArea(type: "structure", top: number, left: number, bottom: number, right: number): YX<StructureU[]>;
    lookForAtArea(type: "terrain", top: number, left: number, bottom: number, right: number): YX<[TerrainType]>;

    lookForAtArea(type: "constructionSite", top: number, left: number, bottom: number, right: number, asArray: boolean): YX<[ConstructionSite]> | { x: number; y: number; constructionSite: ConstructionSite; }[];
    lookForAtArea(type: "creep", top: number, left: number, bottom: number, right: number, asArray: boolean): YX<[Creep]> | { x: number; y: number; creep: Creep; }[];
    lookForAtArea(type: "energy", top: number, left: number, bottom: number, right: number, asArray: boolean): YX<Resource[]> | { x: number; y: number; energy: Resource; }[];
    lookForAtArea(type: "flag", top: number, left: number, bottom: number, right: number, asArray: boolean): YX<Flag[]> | { x: number; y: number; flag: Flag; }[];
    lookForAtArea(type: "mineral", top: number, left: number, bottom: number, right: number, asArray: boolean): YX<[Mineral]> | { x: number; y: number; mineral: Mineral; }[];
    lookForAtArea(type: "nuke", top: number, left: number, bottom: number, right: number, asArray: boolean): YX<Nuke[]> | { x: number; y: number; nuke: Nuke; }[];
    lookForAtArea(type: "resource", top: number, left: number, bottom: number, right: number, asArray: boolean): YX<Resource[]> | { x: number; y: number; resource: Resource; }[];
    lookForAtArea(type: "source", top: number, left: number, bottom: number, right: number, asArray: boolean): YX<[Source]> | { x: number; y: number; source: Source; }[];
    lookForAtArea(type: "structure", top: number, left: number, bottom: number, right: number, asArray: boolean): YX<StructureU[]> | { x: number; y: number; structure: StructureU; }[];
    lookForAtArea(type: "terrain", top: number, left: number, bottom: number, right: number, asArray: boolean): YX<[TerrainType]> | { x: number; y: number; terrain: TerrainType; }[];

    static deserializePath(path: string): PathStep[];
    static serializePath(path: PathStep[]): string;
}
