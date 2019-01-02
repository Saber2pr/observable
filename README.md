# saber-Observable

```bash
npm install

npm start
```

> run ts in browser

> container of state

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
