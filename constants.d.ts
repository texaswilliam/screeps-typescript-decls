declare const OK: ErrCode;
declare const ERR_BUSY: ErrCode;
declare const ERR_FULL: ErrCode;
declare const ERR_GCL_NOT_ENOUGH: ErrCode;
declare const ERR_INVALID_ARGS: ErrCode;
declare const ERR_INVALID_TARGET: ErrCode;
declare const ERR_NAME_EXISTS: ErrCode;
declare const ERR_NO_BODYPART: ErrCode;
declare const ERR_NO_PATH: ErrCode;
declare const ERR_NOT_ENOUGH_ENERGY: ErrCode;
declare const ERR_NOT_ENOUGH_EXTENSIONS: ErrCode;
declare const ERR_NOT_ENOUGH_RESOURCES: ErrCode;
declare const ERR_NOT_FOUND: ErrCode;
declare const ERR_NOT_IN_RANGE: ErrCode;
declare const ERR_NOT_OWNER: ErrCode;
declare const ERR_RCL_NOT_ENOUGH: ErrCode;
declare const ERR_TIRED: ErrCode;

declare const FIND_CONSTRUCTION_SITES: FindType;
declare const FIND_CREEPS: FindType;
declare const FIND_DROPPED_ENERGY: FindType;
declare const FIND_DROPPED_RESOURCES: FindType;
declare const FIND_EXIT: FindType;
declare const FIND_EXIT_BOTTOM: FindType;
declare const FIND_EXIT_LEFT: FindType;
declare const FIND_EXIT_RIGHT: FindType;
declare const FIND_EXIT_TOP: FindType;
declare const FIND_FLAGS: FindType;
declare const FIND_HOSTILE_CONSTRUCTION_SITES: FindType;
declare const FIND_HOSTILE_CREEPS: FindType;
declare const FIND_HOSTILE_SPAWNS: FindType;
declare const FIND_HOSTILE_STRUCTURES: FindType;
declare const FIND_MINERALS: FindType;
declare const FIND_MY_CONSTRUCTION_SITES: FindType;
declare const FIND_MY_CREEPS: FindType;
declare const FIND_MY_SPAWNS: FindType;
declare const FIND_MY_STRUCTURES: FindType;
declare const FIND_NUKES: FindType;
declare const FIND_SOURCES: FindType;
declare const FIND_SOURCES_ACTIVE: FindType;
declare const FIND_STRUCTURES: FindType;

declare const BOTTOM: Direction;
declare const BOTTOM_LEFT: Direction;
declare const BOTTOM_RIGHT: Direction;
declare const LEFT: Direction;
declare const RIGHT: Direction;
declare const TOP: Direction;
declare const TOP_LEFT: Direction;
declare const TOP_RIGHT: Direction;

declare const COLOR_BLUE: Color;
declare const COLOR_BROWN: Color;
declare const COLOR_CYAN: Color;
declare const COLOR_GREEN: Color;
declare const COLOR_GREY: Color;
declare const COLOR_ORANGE: Color;
declare const COLOR_PURPLE: Color;
declare const COLOR_RED: Color;
declare const COLOR_WHITE: Color;
declare const COLOR_YELLOW: Color;

declare const LOOK_CONSTRUCTION_SITES: "constructionSite";
declare const LOOK_CREEPS: "creep";
declare const LOOK_ENERGY: "energy";
declare const LOOK_FLAGS: "flag";
declare const LOOK_MINERALS: "mineral";
declare const LOOK_NUKES: "nuke";
declare const LOOK_RESOURCES: "resource";
declare const LOOK_SOURCES: "source";
declare const LOOK_STRUCTURES: "structure";
declare const LOOK_TERRAIN: "terrain";

declare const OBSTACLE_OBJECT_TYPES: { [i: number]: string; };

declare const ATTACK: "attack";
declare const CARRY: "carry";
declare const CLAIM: "claim";
declare const HEAL: "heal";
declare const MOVE: "move";
declare const RANGED_ATTACK: "ranged_attack";
declare const TOUGH: "tough";
declare const WORK: "work";

declare const BODYPART_COST: { [bodyPartName: string]: number; };

declare const CREEP_CLAIM_LIFE_TIME: number;
declare const CREEP_CORPSE_RATE: number;
declare const CREEP_LIFE_TIME: number;

declare const ATTACK_POWER: number;
declare const BUILD_POWER: number;
declare const CARRY_CAPACITY: number;
declare const DISMANTLE_COST: number;
declare const DISMANTLE_POWER: number;
declare const HARVEST_MINERAL_POWER: number;
declare const HARVEST_POWER: number;
declare const HEAL_POWER: number;
declare const RANGED_ATTACK_POWER: number;
declare const RANGED_HEAL_POWER: number;
declare const REPAIR_COST: number;
declare const REPAIR_POWER: number;
declare const UPGRADE_CONTROLLER_POWER: number;

declare const RAMPART_DECAY_AMOUNT: number;
declare const RAMPART_DECAY_TIME: number;
declare const RAMPART_HITS: number;
declare const RAMPART_HITS_MAX: { [controllerLevel: number]: number; };

declare const ENERGY_DECAY: number;
declare const ENERGY_REGEN_TIME: number;

declare const CREEP_SPAWN_TIME: number;
declare const SPAWN_HITS: number;
declare const SPAWN_ENERGY_START: number;
declare const SPAWN_ENERGY_CAPACITY: number;

declare const SOURCE_ENERGY_CAPACITY: number;
declare const SOURCE_ENERGY_KEEPER_CAPACITY: number;
declare const SOURCE_ENERGY_NEUTRAL_CAPACITY: number;

declare const WALL_HITS: number;
declare const WALL_HITS_MAX: number;

declare const EXTENSION_ENERGY_CAPACITY: { [controllerLevel: number]: number; };
declare const EXTENSION_HITS: number;

declare const ROAD_HITS: number;
declare const ROAD_WEAROUT: number;
declare const ROAD_DECAY_AMOUNT: number;
declare const ROAD_DECAY_TIME: number;

declare const LINK_HITS: number;
declare const LINK_HITS_MAX: number;
declare const LINK_CAPACITY: number;
declare const LINK_COOLDOWN: number;
declare const LINK_LOSS_RATIO: number;

declare const STORAGE_CAPACITY: number;
declare const STORAGE_HITS: number;

declare const STRUCTURE_CONTAINER: string;
declare const STRUCTURE_CONTROLLER: string;
declare const STRUCTURE_EXTENSION: string;
declare const STRUCTURE_EXTRACTOR: string;
declare const STRUCTURE_KEEPER_LAIR: string;
declare const STRUCTURE_LAB: string;
declare const STRUCTURE_LINK: string;
declare const STRUCTURE_OBSERVER: string;
declare const STRUCTURE_PORTAL: string;
declare const STRUCTURE_POWER_BANK: string;
declare const STRUCTURE_POWER_SPAWN: string;
declare const STRUCTURE_RAMPART: string;
declare const STRUCTURE_ROAD: string;
declare const STRUCTURE_SPAWN: string;
declare const STRUCTURE_STORAGE: string;
declare const STRUCTURE_TERMINAL: string;
declare const STRUCTURE_TOWER: string;
declare const STRUCTURE_WALL: string;

declare const CONSTRUCTION_COST: { [structureName: string]: number; };
declare const CONSTRUCTION_COST_ROAD_SWAMP_RATIO: number;

declare const CONTROLLER_ATTACK_BLOCKED_UPGRADE: number;
declare const CONTROLLER_CLAIM_DOWNGRADE: number;
declare const CONTROLLER_DOWNGRADE: { [i: number]: number; };
declare const CONTROLLER_LEVELS: { [i: number]: number; };
declare const CONTROLLER_MAX_UPGRADE_PER_TICK: number;
declare const CONTROLLER_RESERVE: number;
declare const CONTROLLER_RESERVE_MAX: number;
declare const CONTROLLER_STRUCTURES: { [structureName: string]: { [controllerLevel: number]: number; }; };

declare const TOWER_CAPACITY: number;
declare const TOWER_ENERGY_COST: number;
declare const TOWER_FALLOFF: number;
declare const TOWER_FALLOFF_RANGE: number;
declare const TOWER_HITS: number;
declare const TOWER_OPTIMAL_RANGE: number;
declare const TOWER_POWER_ATTACK: number;
declare const TOWER_POWER_HEAL: number;
declare const TOWER_POWER_REPAIR: number;

declare const OBSERVER_HITS: number;
declare const OBSERVER_RANGE: number;

declare const POWER_BANK_CAPACITY_MAX: number;
declare const POWER_BANK_CAPACITY_MIN: number;
declare const POWER_BANK_CAPACITY_CRIT: number;
declare const POWER_BANK_DECAY: number;
declare const POWER_BANK_HIT_BACK: number;
declare const POWER_BANK_HITS: number;

declare const POWER_SPAWN_ENERGY_CAPACITY: number;
declare const POWER_SPAWN_ENERGY_RATIO: number;
declare const POWER_SPAWN_HITS: number;
declare const POWER_SPAWN_POWER_CAPACITY: number;

declare const EXTRACTOR_HITS: number;

declare const LAB_BOOST_ENERGY: number;
declare const LAB_BOOST_MINERAL: number;
declare const LAB_COOLDOWN: number;
declare const LAB_ENERGY_CAPACITY: number;
declare const LAB_HITS: number;
declare const LAB_MINERAL_CAPACITY: number;

declare const GCL_MULTIPLY: number;
declare const GCL_NOVICE: number;
declare const GCL_POW: number;

declare const MODE_ARENA: string;
declare const MODE_SIMULATION: string;
declare const MODE_SURVIVAL: string;
declare const MODE_WORLD: string;

declare const TERRAIN_MASK_LAVA: number;
declare const TERRAIN_MASK_SWAMP: number;
declare const TERRAIN_MASK_WALL: number;

declare const MAX_CONSTRUCTION_SITES: number;
declare const MAX_CREEP_SIZE: number;

declare const MINERAL_MIN_AMOUNT: { [mineralType: string]: number; };
declare const MINERAL_RANDOM_FACTOR: number;
declare const MINERAL_REGEN_TIME: number;

declare const TERMINAL_CAPACITY: number;
declare const TERMINAL_HITS: number;
declare const TERMINAL_MIN_SEND: number;

declare const CONTAINER_CAPACITY: number;
declare const CONTAINER_DECAY: number;
declare const CONTAINER_DECAY_TIME: number;
declare const CONTAINER_DECAY_TIME_OWNED: number;
declare const CONTAINER_HITS: number;

declare const NUKE_DAMAGE: { [i: number]: number; };
declare const NUKE_LAND_TIME: number;
declare const NUKE_RANGE: number;
declare const NUKER_COOLDOWN: number;
declare const NUKER_ENERGY_CAPACITY: number;
declare const NUKER_GHODIUM_CAPACITY: number;
declare const NUKER_HITS: number;

declare const RESOURCE_ENERGY: "energy";
declare const RESOURCE_POWER: "power";

declare const RESOURCE_CATALYST: "X";
declare const RESOURCE_GHODIUM: "G";
declare const RESOURCE_HYDROGEN: "H";
declare const RESOURCE_KEANIUM: "K";
declare const RESOURCE_LEMERGIUM: "L";
declare const RESOURCE_OXYGEN: "O";
declare const RESOURCE_UTRIUM: "U";
declare const RESOURCE_ZYNTHIUM: "Z";

declare const RESOURCE_HYDROXIDE: "OH";
declare const RESOURCE_UTRIUM_LEMERGITE: "UL";
declare const RESOURCE_ZYNTHIUM_KEANITE: "ZK";

declare const RESOURCE_GHODIUM_HYDRIDE: "GH";
declare const RESOURCE_GHODIUM_OXIDE: "GO";
declare const RESOURCE_KEANIUM_HYDRIDE: "KH";
declare const RESOURCE_KEANIUM_OXIDE: "KO";
declare const RESOURCE_LEMERGIUM_HYDRIDE: "LH";
declare const RESOURCE_LEMERGIUM_OXIDE: "LO";
declare const RESOURCE_UTRIUM_HYDRIDE: "UH";
declare const RESOURCE_UTRIUM_OXIDE: "UO";
declare const RESOURCE_ZYNTHIUM_HYDRIDE: "ZH";
declare const RESOURCE_ZYNTHIUM_OXIDE: "ZO";

declare const RESOURCE_GHODIUM_ACID: "GH2O";
declare const RESOURCE_GHODIUM_ALKALIDE: "GHO2";
declare const RESOURCE_KEANIUM_ACID: "KH2O";
declare const RESOURCE_KEANIUM_ALKALIDE: "KHO2";
declare const RESOURCE_LEMERGIUM_ACID: "LH2O";
declare const RESOURCE_LEMERGIUM_ALKALIDE: "LHO2";
declare const RESOURCE_UTRIUM_ACID: "UH2O";
declare const RESOURCE_UTRIUM_ALKALIDE: "UHO2";
declare const RESOURCE_ZYNTHIUM_ACID: "ZH2O";
declare const RESOURCE_ZYNTHIUM_ALKALIDE: "ZHO2";

declare const RESOURCE_CATALYZED_GHODIUM_ACID: "XGH2O";
declare const RESOURCE_CATALYZED_GHODIUM_ALKALIDE: "XGHO2";
declare const RESOURCE_CATALYZED_KEANIUM_ACID: "XKH2O";
declare const RESOURCE_CATALYZED_KEANIUM_ALKALIDE: "XKHO2";
declare const RESOURCE_CATALYZED_LEMERGIUM_ACID: "XLH2O";
declare const RESOURCE_CATALYZED_LEMERGIUM_ALKALIDE: "XLHO2";
declare const RESOURCE_CATALYZED_UTRIUM_ACID: "XUH2O";
declare const RESOURCE_CATALYZED_UTRIUM_ALKALIDE: "XUHO2";
declare const RESOURCE_CATALYZED_ZYNTHIUM_ACID: "XZH2O";
declare const RESOURCE_CATALYZED_ZYNTHIUM_ALKALIDE: "XZHO2";

declare const REACTIONS: { [resourceType: string]: { [resourceType: string]: string; }; };

declare const BOOSTS: {
    [resourceType: string]: { attack: number; } | { build: number; repair: number; } | { capacity: number; } |
        { damage: number; } | { dismantle: number; } | { fatigue: number; } | { harvest: number; } |
        { heal: number; rangedHeal: number; } | { rangedAttack: number; rangedMassAttack: number; } |
        { upgradeController: number; };
};

declare const BODYPARTS_ALL: { [i: number]: string; };

declare const RESOURCES_ALL: { [i: number]: string; };

declare const COLORS_ALL: { [i: number]: number; };
