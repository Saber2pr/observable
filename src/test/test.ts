import { Observable } from '../core/saber-observable'

const observable$ = new Observable({
  age: 233,
  name: 'saber'
})

observable$.subscribe((s, pre) => console.log(s, pre))

observable$.setState({ age: 100 })

observable$.setState(s => ({ age: s.age + 1 }))
