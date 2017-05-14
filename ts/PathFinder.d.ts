declare namespace PathFinder {
    /** Yes, these actually have to be RoomPositions and not just XYRs. */
    type Goal = RoomPosition | { pos: RoomPosition, range: number };

    /** Yes, these actually have to be RoomPositions and not just XYRs. */
    export function search(origin: RoomPosition, goal: Goal | Goal[], opts?: SearchOpts): { path: RoomPosition[], ops: number };
    export function use(isEnabled: boolean): void;

    export class CostMatrix {
        constructor();

        get(x: number, y: number): void;
        set(x: number, y: number, cost: number): void;
        clone(): CostMatrix;
        serialize(): number[];

        static deserialize(val: number[]): CostMatrix;
    }
}
