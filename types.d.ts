//It would be nice to fill these in with TS enums, but if I made enums, it would move this lib from being decl-only to
//requiring compilation.

type Color = number;
type Direction = number;
type ErrCode = number;
type FindExit = number;
type FindType = number;

type CreepName = string;
type FlagName = string;
type ID = string;
type RoomName = string;
type SpawnName = string;
type Ticks = number;

type BodyPartType = "attack" | "carry" | "claim" | "heal" | "move" | "ranged_attack" | "tough" | "work";
type CreepMethodName = "attack" | "attackController" | "build" | "claimController" | "dismantle" | "drop" | "harvest" |
    "heal" | "move" | "pickup" | "rangedAttack" | "rangedHeal" | "rangedMassAttack" | "repair" | "reserveController" |
    "say" | "suicide" | "transfer" | "upgradeController" | "withdraw";
type LookType = "constructionSite" | "creep" | "energy" | "flag" | "mineral" | "nuke" | "resource" | "source" |
    "structure" | "terrain";
type MineralType = "H" | "O" | "U" | "L" | "K" | "Z" | "X" | "G";
type ResourceType = "energy" | "power" | MineralType | "OH" | "ZK" | "UL" | "UH" | "UO" | "KH" | "KO" | "LH" | "LO" |
    "ZH" | "ZO" | "GH" | "GO" | "UH2O" | "UHO2" | "KH2O" | "KHO2" | "LH2O" | "LHO2" | "ZH2O" | "ZHO2" | "GH2O" |
    "GHO2" | "XUH2O" | "XUHO2" | "XKH2O" | "XKHO2" | "XLH2O" | "XLHO2" | "XZH2O" | "XZHO2" | "XGH2O" | "XGHO2";
type StructureType = "constructedWall" | "container" | "controller" | "extension" | "extractor" | "keeperLair" | "lab" |
    "link" | "nuker" | "observer" | "portal" | "powerBank" | "powerSpawn" | "rampart" | "road" | "spawn" | "storage" |
    "terminal" | "tower";
type TerrainType = "plain" | "swamp" | "wall";

type FindU = ConstructionSite | Creep | Flag | Mineral | Nuke | Resource | Source | StructureU;
type OwnedStructureU = StructureController | StructureExtension | StructureExtractor | StructureKeeperLair |
    StructureLab | StructureLink | StructureNuker | StructureObserver | StructurePowerBank | StructurePowerSpawn |
    StructureRampart | StructureSpawn | StructureStorage | StructureTerminal | StructureTower;
type StructureU = OwnedStructureU | StructureContainer | StructurePortal | StructureRoad | StructureWall;
