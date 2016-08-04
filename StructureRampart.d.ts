declare class StructureRampart extends OwnedStructure implements Decays {
    isPublic: boolean;
    ticksToDecay: number;

    setPublic(isPublic: boolean): ErrCode;
}
