declare class Structure extends RoomObject implements Destructible, HasID {
    hits: number;
    hitsMax: number;
    id: ID;
    structureType: StructureType;

    destroy(): ErrCode;
    isActive(): boolean;
    notifyWhenAttacked(enabled: boolean): ErrCode;
}
