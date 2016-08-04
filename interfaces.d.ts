interface AlgorithmOpt { algorithm?: "astar" | "djikstra"; }

interface Destructible {
    hits: number;
    hitsMax: number;
}

interface Decays { ticksToDecay: number; }

interface FilterOpt<T> { filter?: Object | ((x: T) => boolean) | string; }

interface FindPathOpts {
    avoid?: (RoomObject | RoomPosition)[];
    costCallback?(roomName: RoomName, costMatrix: PathFinder.CostMatrix): void;
    heuristicWeight?: number;
    ignore?: (RoomObject | RoomPosition)[];
    ignoreCreeps?: boolean;
    ignoreDestructibleStructures?: boolean;
    ignoreRoads?: boolean;
    maxOps?: number;
    maxRooms?: number;
    serialize?: boolean;
}

interface FindRouteOpts {
    routeCallback?(roomName: RoomName, fromRoomName: string): number;
}

interface HasEnergy {
    energy: number;
    energyCapacity: number;
}

interface HasID { id: ID }

interface HasProgress {
    progress: number;
    progressTotal: number;
}

interface HasXYR { pos: XYR }

type LookObject = { type: "constructionSite"; constructionSite: ConstructionSite; } |  { type: "creep"; creep: Creep; } |
    { type: "energy"; energy: Resource } | { type: "flag"; flag: Flag; } | { type: "mineral"; mineral: Mineral; } |
    { type: "nuke"; nuke: Nuke; } | { type: "resource"; resource: Resource } | { type: "source"; source: Source; } |
    { type: "structure"; structure: Structure; } | { type: "terrain"; terrain: TerrainType };

interface MoveToOpts {
    noPathFinding?: boolean;
    reusePath?: number;
    serializeMemory?: boolean;
}

interface Named { name: string; }

interface Owned {
    my: boolean;
    owner: { username: string; };
}﻿

interface PathStep {
    x: number;
    y: number;
    dx: number;
    dy: number;
    direction: Direction;
}

interface SearchOpts {
    flee?: boolean;
    heuristicWeight?: number;
    maxOps?: number;
    maxRooms?: number;
    plainCost?: number;
    roomCallback?(roomName: RoomName): PathFinder.CostMatrix;
    swampCost?: number;
}

interface Transaction {
    transactionId: string;
    time: number;
    sender: { username: string; };
    recipient: { username: string; };
    resourceType: ResourceType;
    amount: number;
    from: string;
    to: string;
    description: string;
    order: {
        id: string;
        type: string;
        price: number;
    };
}

interface XYR {
    x: number;
    y: number;
    roomName: RoomName;
}

interface YX<T> { [y: number]: { [x: number]: T; }; }
