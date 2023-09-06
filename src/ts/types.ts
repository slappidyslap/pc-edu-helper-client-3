export type Tuple<
    T,
    N extends number,
    R extends T[] = []
> = number extends N
    ? T[]
    : R['length'] extends N
        ? R
        : Tuple<T, N, [T, ...R]>;