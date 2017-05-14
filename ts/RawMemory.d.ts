interface RawMemory {
    get(): string;
    set(value: string): void;
}

declare var RawMemory: RawMemory;
