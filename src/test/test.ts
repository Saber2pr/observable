import { Observable } from '../core/saber-observable'

const observable$ = new Observable({
  age: 233,
  name: 'saber'
})

observable$.subscribe(s => console.log(s))

observable$.setState({ age: 100 })
