declare class Source extends RoomObject implements HasEnergy, HasID {
    energy: number;
    energyCapacity: number;
    id: ID;
    ticksToRegeneration: number;
}
