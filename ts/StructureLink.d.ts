declare class StructureLink extends OwnedStructure implements HasEnergy {
    cooldown: number;
    energy: number;
    energyCapacity: number;

    transferEnergy(target: StructureLink, amount?: number): ErrCode;
}
