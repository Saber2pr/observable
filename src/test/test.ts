import { Observable } from '../core/Observable'

new Observable({ value: 100 })
  .pipe(state => ({ value: state.value + 233 }))
  .subscribe(state => console.log(state))
