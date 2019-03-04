/*
 * @Author: saber2pr
 * @Date: 2019-03-01 12:41:33
 * @Last Modified by:   saber2pr
 * @Last Modified time: 2019-03-01 12:41:33
 */
/**
 * compose
 *
 * @export
 * @template argType
 * @param {...Array<(...args: argType[]) => argType>} funcs
 * @returns
 */
export function compose<argType>(
  ...funcs: Array<(...args: argType[]) => argType>
) {
  if (funcs.length === 0) {
    return (arg: argType) => arg
  }
  if (funcs.length === 1) {
    return funcs[0]
  }
  return funcs.reduce((a, b) => (...args) => a(b(...args)))
}
/**
 * clone
 * `deep`
 * @param obj
 */
export const clone = <T>(obj: T): T => JSON.parse(JSON.stringify(obj))
/**
 * Observer
 *
 * @export
 * @interface Observer
 * @template S
 */
export interface Observer<S> {
  (state: S, preState: S): void
}
/**
 * Observable
 *
 * @export
 * @class Observable
 * @template S
 */
export class Observable<S extends Object> {
  /**
   *Creates an instance of Observable.
   * @param {S} state
   * @memberof Observable
   */
  constructor(state: S) {
    this.state = Object.freeze(state)
    this.initState = Object.freeze(state)
    this.observers = new Array<Observer<S>>()
  }
  protected state: S
  protected initState: S
  private observers: Array<Observer<S>>
  /**
   * subscribe
   *
   * @param {Observer<S>} observer
   * @returns
   * @memberof Observable
   */
  public subscribe(observer: Observer<S>) {
    this.observers.push(observer)
    return this
  }
  /**
   * unsubscribe
   *
   * @param {Observer<S>} observer
   * @returns
   * @memberof Observable
   */
  public unsubscribe(observer: Observer<S>) {
    this.observers = this.observers.filter(obser => obser !== observer)
    return this
  }
  /**
   * pipe
   *
   * @param {...Array<(...args: S[]) => S>} funcs
   * @memberof Observable
   */
  public pipe(...funcs: Array<(...args: S[]) => S>) {
    const reducer = compose(...funcs.reverse())
    const nextState = reducer(this.getState())
    return this.dispatch(nextState)
  }
  /**
   * dispatch
   *
   * @param {S} nextState
   * @returns
   * @memberof Observable
   */
  public dispatch(nextState: S = this.getState()) {
    this.observers.forEach(observer => observer(nextState, this.getState()))
    this.state = Object.freeze(nextState)
    return this
  }
  /**
   * getState
   *
   * @returns {S}
   * @memberof Observable
   */
  public getState(): S {
    return this.state
  }
  /**
   * getInitState
   *
   * @returns {S}
   * @memberof Observable
   */
  public getInitState(): S {
    return this.initState
  }
  /**
   * push
   *
   * @param {S} state
   * @memberof Observable
   */
  public setState<K extends keyof S>(
    state: Pick<S, K> | ((preState: S) => Pick<S, K>)
  ) {
    if (typeof state === 'function') {
      return this.dispatch(
        Object.assign(clone(this.getState()), state(this.getState()))
      )
    } else {
      return this.dispatch(Object.assign(clone(this.getState()), state))
    }
  }
}
