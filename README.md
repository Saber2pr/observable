# saber-observable

```bash
npm install saber-observable
```

> container of state

```ts
const observable$ = new Observable({
  age: 233,
  name: 'saber'
})

observable$.subscribe((s, pre) => console.log(s, pre))

observable$.setState({ age: 100 })

observable$.setState(s => ({ age: s.age + 1 }))

console.log(observable$.getInitState())
```
