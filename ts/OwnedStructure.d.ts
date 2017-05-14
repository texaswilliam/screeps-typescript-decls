declare class OwnedStructure extends Structure implements Owned {
    my: boolean;
    owner: { username: string; };
}
