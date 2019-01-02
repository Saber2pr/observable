import { Observable } from '../lib/Observable'

let observable = new Observable({ value: '' })

let unsubscribe = observable.subscribe(state => console.log(state))

observable.push({ value: '233' })

let getState = observable.pull()

// unsubscribe()

new Observable(0)
  .push(100)
  .pipe(
    v => v + 100,
    v => v + 100,
    v => v + 100,
    v => v + 100,
    v => v + 100
  )
  .subscribe(state => console.log(state))
