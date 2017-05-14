declare class ConstructionSite extends RoomObject implements HasID, HasProgress, Owned {
    id: ID;
    my: boolean;
    owner: { username: string; };
    progress: number;
    progressTotal: number;
    structureType: StructureType;

    remove(): ErrCode;
}
