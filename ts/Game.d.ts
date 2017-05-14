interface Game {
    constructionSites: { [id: string]: ConstructionSite; };

    cpu: {
        bucket: number;
        limit: number;
        tickLimit: number;

        getUsed(): number;
    };

    creeps: { [name: string]: Creep; };
    flags: { [name: string]: Flag; };

    gcl: {
        level: number;
        progress: number;
        progressTotal: number;
    };

    map: {
        describeExits(roomName: RoomName): { [direction: number]: RoomName; } | null;
        findExit(fromRoom: string | Room, toRoom: string | Room, opts?: FindRouteOpts): FindExit | ErrCode;
        findRoute(fromRoom: string | Room, toRoom: string | Room, opts?: FindRouteOpts): { exit: FindExit, room: RoomName }[] | ErrCode;
        getRoomLinearDistance(roomName1: RoomName, roomName2: RoomName): number;
        getTerrainAt(x: number, y: number, roomName: RoomName): TerrainType;
        getTerrainAt(pos: XYR): TerrainType;
        isRoomProtected(roomName: RoomName): boolean;
    }

    market: {
        incomingTransactions: Transaction[];
        outgoingTransactions: Transaction[];

        calcTransactionCost(amount: number, roomName1: RoomName, roomName2: RoomName): number;
    }

    rooms: { [name: string]: Room; };
    spawns: { [name: string]: StructureSpawn; };
    structures: { [id: string]: Structure; };
    time: Ticks;

    getObjectById(id: ID): ConstructionSite | Creep | Mineral | Nuke | Resource | Source | StructureU | null;
    notify(message: string, groupInterval?: number): void;
}

declare var Game: Game;
