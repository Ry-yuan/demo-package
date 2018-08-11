
import store from './store';
import { addToCart } from './actions/cart-action';

console.log('initial state:' , store.getState());
 let unsubscribe = store.subscribe(()=>{
     console.log(store.getState());
 })

 store.dispatch(addToCart('coffee',1,33));
 store.dispatch(addToCart('coffee milk',23,33));
 store.dispatch(addToCart('coffee',13,33));

 unsubscribe();