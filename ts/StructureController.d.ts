declare class StructureController extends OwnedStructure implements HasProgress {
    level: number;
    progress: number;
    progressTotal: number;
    reservation: { username: string; ticksToEnd: number; };
    ticksToDowngrade: number;
    upgradeBlocked: number;

    unclaim(): ErrCode;
}
