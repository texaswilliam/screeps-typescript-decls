declare class StructureNuker extends OwnedStructure {
    energy: number;
    energyCapacity: number;
    ghodium: number;
    ghodiumCapacity: number;
    cooldown: number;

    /** The code for this actually checks instanceof RoomPosition. */
    launchNuke(pos: RoomPosition): ErrCode;
}
