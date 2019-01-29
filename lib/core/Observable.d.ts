/**
 * compose
 *
 * @export
 * @template argType
 * @param {...Array<(...args: argType[]) => argType>} funcs
 * @returns
 */
export declare function compose<argType>(...funcs: Array<(...args: argType[]) => argType>): (...args: argType[]) => argType;
/**
 * clone
 *
 * @export
 * @template T
 * @param {T} value
 * @returns {T}
 */
export declare function clone<T>(value: T): T;
/**
 * Observer
 *
 * @export
 * @interface Observer
 * @template T
 */
export interface Observer<T> {
    (state: T, preState: T): void;
}
export interface UnSubscribe<T> {
    (): Observer<T>[];
}
/**
 * Observable
 *
 * @export
 * @class Observable
 * @template T
 */
export declare class Observable<T = any> {
    /**
     *Creates an instance of Observable.
     * @param {T} state
     * @memberof Observable
     */
    constructor(state: T);
    protected state: T;
    private observers;
    /**
     * subscribe
     *
     * @param {Observer<T>} observer
     * @returns {UnSubscribe<T>}
     * @memberof Observable
     */
    subscribe(observer: Observer<T>): UnSubscribe<T>;
    /**
     * pipe
     *
     * @param {...Array<(...args: T[]) => T>} funcs
     * @memberof Observable
     */
    pipe(...funcs: Array<(...args: T[]) => T>): this;
    /**
     * getState
     *
     * @returns {T}
     * @memberof Observable
     */
    getState(): T;
    /**
     * push
     *
     * @param {T} state
     * @memberof Observable
     */
    push(state: T): this;
    /**
     * pull
     *
     * @returns {T}
     * @memberof Observable
     */
    pull(): T;
}
