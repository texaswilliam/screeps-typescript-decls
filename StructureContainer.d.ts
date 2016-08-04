declare class StructureContainer extends Structure {
    store: { [resourceType: string]: number; };
    storeCapacity: number;

    /** @deprecated */
    transfer(target: Creep, resourceType: ResourceType, amount?: number) : ErrCode;
}
