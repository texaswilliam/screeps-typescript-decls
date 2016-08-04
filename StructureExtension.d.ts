declare class StructureExtension extends OwnedStructure {
    energy: number;
    energyCapacity: number;

    /** @deprecated */
    transferEnergy(target: Creep, amount?: number): ErrCode;
}
