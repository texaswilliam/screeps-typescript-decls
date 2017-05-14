declare class StructureExtension extends OwnedStructure implements HasEnergy {
    energy: number;
    energyCapacity: number;

    /** @deprecated */
    transferEnergy(target: Creep, amount?: number): ErrCode;
}
