# saber-Observable

> container of state

1. push
2. pull
3. subscribe
4. pipe

```ts
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
```
