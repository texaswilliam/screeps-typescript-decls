declare class StructureStorage extends OwnedStructure {
    store: { [resourceType: string]: number; };
    storeCapacity: number;

    /** @deprecated */
    transfer(target: Creep, resourceType: ResourceType, amount?: number): ErrCode;
}
