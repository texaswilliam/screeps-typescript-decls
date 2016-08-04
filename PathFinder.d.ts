declare namespace PathFinder {
    export function search(origin: XYR | HasXYR, goal: XYR | HasXYR | HasXYR & { range: number }, opts?: SearchOpts): { path: RoomPosition[], ops: number };
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
