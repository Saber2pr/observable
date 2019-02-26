/*
 * @Author: AK-12
 * @Date: 2018-12-29 18:55:04
 * @Last Modified by: AK-12
 * @Last Modified time: 2019-01-29 14:17:19
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
 * Observer
 *
 * @export
 * @interface Observer
 * @template S
 */
export interface Observer<S> {
  (state: S, preState: S): void
}
export interface UnSubscribe<S> {
  (): Observer<S>[]
}
/**
 * Observable
 *
 * @export
 * @class Observable
 * @template S
 */
export class Observable<S = any> {
  /**
   *Creates an instance of Observable.
   * @param {S} state
   * @memberof Observable
   */
  constructor(state: S) {
    this.state = state
    this.observers = new Array<Observer<S>>()
  }
  protected state: S
  private observers: Array<Observer<S>>
  /**
   * subscribe
   *
   * @param {Observer<S>} observer
   * @returns {UnSubscribe<S>}
   * @memberof Observable
   */
  public subscribe(observer: Observer<S>): UnSubscribe<S> {
    this.observers.push(observer)
    return () =>
      (this.observers = this.observers.filter(obser => obser !== observer))
  }
  /**
   * pipe
   *
   * @param {...Array<(...args: S[]) => S>} funcs
   * @memberof Observable
   */
  public pipe(...funcs: Array<(...args: S[]) => S>) {
    !(async () => compose(...funcs.reverse())(this.state))().then(state => {
      this.observers.forEach(observer => observer(state, this.state))
      this.state = state
    })
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
   * push
   *
   * @param {S} state
   * @memberof Observable
   */
  public setState<K extends keyof S>(state: Pick<S, K>) {
    return this.pipe(() => Object.assign(this.state, state))
  }
}
