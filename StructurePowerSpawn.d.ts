declare class StructurePowerSpawn extends OwnedStructure {
    energy: number;
    energyCapacity: number;
    power: number;
    powerCapacity: number;

    processPower(): ErrCode;
    /** @deprecated */
    transferEnergy(target: Creep, amount?: number): ErrCode;
}
