declare class StructureLab extends OwnedStructure implements HasEnergy {
    cooldown: number;
    energy: number;
    energyCapacity: number;
    mineralAmount: number;
    mineralType: ResourceType;
    mineralCapacity: number;

    boostCreep(creep: Creep, bodyPartsCount?: number): ErrCode;
    runReaction(lab1: StructureLab, lab2: StructureLab): ErrCode;
    /** @deprecated */
    transfer(target: Creep, resourceType: ResourceType, amount?: number): ErrCode;
}
