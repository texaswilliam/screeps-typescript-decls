declare class StructureLink extends OwnedStructure {
    cooldown: number;
    energy: number;
    energyCapacity: number;

    transferEnergy(target: StructureLink, amount?: number): ErrCode;
}
