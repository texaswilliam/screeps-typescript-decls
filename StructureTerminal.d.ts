declare class StructureTerminal extends OwnedStructure {
    store: { [resourceType: string]: number; };
    storeCapacity: number;

    send(resourceType: ResourceType, amount: number, destination: string, description?: string): ErrCode;
    /** @deprecated */
    transfer(target: Creep, resourceType: ResourceType, amount?: number): ErrCode;
}
