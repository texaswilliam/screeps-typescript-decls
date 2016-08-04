declare class StructureTower extends OwnedStructure implements HasEnergy {
    energy: number;
    energyCapacity: number;

    attack(target: Creep): ErrCode;
    heal(target: Creep): ErrCode;
    repair(target: Structure): ErrCode;
    /** @deprecated */
    transferEnergy(target: Creep, amount?: number): ErrCode;
}
