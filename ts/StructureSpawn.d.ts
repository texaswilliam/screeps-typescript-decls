declare class StructureSpawn extends OwnedStructure implements HasEnergy {
    energy: number;
    energyCapacity: number;
    memory: SpawnMem;
    name: SpawnName;
    spawning?: { name: CreepName; needTime: number; remainingTime: number; };

    canCreateCreep(body: BodyPartType[], name?: string): ErrCode;
    createCreep(body: BodyPartType[], name?: string, memory?: CreepMem): ErrCode;
    recycleCreep(target: Creep): ErrCode;
    renewCreep(target: Creep): ErrCode;
    /** @deprecated */
    transferEnergy(target: Creep, amount?: number): ErrCode;
}
