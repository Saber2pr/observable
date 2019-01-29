import { Observable } from '../core/Observable'

let obs = new Observable({ value: 100 }).pipe(state => ({
  value: state.value + 233
}))

new Promise(resolve => {
  obs.subscribe((state, pre) => {
    console.log(state, pre)
    resolve()
  })
}).then(() => console.log('then', obs.getState()))

console.log(obs.getState())
