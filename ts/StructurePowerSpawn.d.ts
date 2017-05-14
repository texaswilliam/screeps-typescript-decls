declare class StructurePowerSpawn extends OwnedStructure implements HasEnergy {
    energy: number;
    energyCapacity: number;
    power: number;
    powerCapacity: number;

    processPower(): ErrCode;
    /** @deprecated */
    transferEnergy(target: Creep, amount?: number): ErrCode;
}
