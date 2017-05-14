interface CreepMem {}
interface FlagMem {}
interface RoomMem {}
interface SpawnMem {}

interface Memory {
    creeps: { [name: string]: CreepMem; };
    flags: { [name: string]: FlagMem; };
    rooms: { [name: string]: RoomMem; };
    spawns: { [name: string]: SpawnMem; };
}

declare var Memory: Memory;
