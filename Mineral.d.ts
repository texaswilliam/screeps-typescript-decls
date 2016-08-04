declare class Mineral extends RoomObject implements HasID {
    mineralAmount: number;
    mineralType: MineralType;
    id: ID;
    ticksToRegeneration: number;
}
