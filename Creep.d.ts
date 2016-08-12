declare class Creep extends RoomObject implements Destructible, HasID, Owned {
    body: { boost?: ResourceType; type: BodyPartType; hits: number; }[];
    carry: { [resourceType: string]: number; };
    carryCapacity: number;
    fatigue: number;
    hits: number;
    hitsMax: number;
    id: ID;
    memory: CreepMem;
    my: boolean;
    name: CreepName;
    owner: { username: string; };
    spawning: boolean;
    ticksToLive: number;

    attack(target: Creep | Structure): ErrCode;
    attackController(target: StructureController): ErrCode;
    build(target: ConstructionSite): ErrCode;
    cancelOrder(methodName: CreepMethodName): ErrCode;
    claimController(target: StructureController): ErrCode;
    dismantle(target: Structure): ErrCode;
    drop(resourceType: ResourceType, amount?: number): ErrCode;
    getActiveBodyparts(type: BodyPartType): number;
    harvest(target: Source | Mineral): ErrCode;
    heal(target: Creep): ErrCode;
    move(direction: Direction): ErrCode;
    moveByPath(path: PathStep[] | string): ErrCode;

    moveTo(x: number, y: number, opts?: MoveToOpts & FindPathOpts): ErrCode;
    moveTo(target: XYR | HasXYR, opts?: MoveToOpts & FindPathOpts): ErrCode;

    notifyWhenAttacked(enabled: boolean): ErrCode;
    pickup(target: Resource): ErrCode;
    rangedAttack(target: Creep | Structure): ErrCode;
    rangedHeal(target: Creep): ErrCode;
    rangedMassAttack(): ErrCode;
    repair(target: Structure): ErrCode;
    reserveController(target: StructureController): ErrCode;
    say(message: string, publik?: boolean): ErrCode;
    suicide(): ErrCode;
    transfer(target: Creep | Structure, resourceType: ResourceType, amount?: number): ErrCode;
    upgradeController(target: StructureController): ErrCode;
    withdraw(target: Structure, resourceType: ResourceType, amount?: number): ErrCode;
}
