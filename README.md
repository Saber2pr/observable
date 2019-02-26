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

observable$.subscribe(s => console.log(s))

observable$.setState({ age: 100 })
```
