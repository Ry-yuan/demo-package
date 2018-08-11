import {createStore, combineReducers}  from "redux";
// 测试数据

const initialState = {
    cart: [
      {
        product: 'bread 700g',
        quantity: 2,
        unitCost: 90
      },
      {
        product: 'milk 500ml',
        quantity: 1,
        unitCost: 47
      }
    ]
  }
// 创建多个reducer
// reducer的作用管理数据的状态，更具不同的action来返回对应的数据
const ADD_TO_CART = 'ADD_TO_CART';
const cartReducer = function(state=initialState,action){
    switch(action.type){
        case ADD_TO_CART:{
            return{
                ...state,
                cart:[...state.cart,action.payload]
            }
        }

        default:
            return state;
    }
    
}
const productReducer = function(state=[],action){
    return state;
}


// 定义一个action，作为store.dispatch的一个参数，action是一个js对象，有一个必须的type和可选的payload。
function addToCart (product , quantity , unitCost){
    return{
        type: ADD_TO_CART,
        payload: { product, quantity , unitCost}
    }
}

const allReducer = {
    products:productReducer,
    shoppingCart:cartReducer
}

// 通过combindReducers来存储多个reducer
const rootReducer = combineReducers(allReducer);

// 创建store
let  store = createStore(rootReducer);
console.log("initial state", store.getState()); 





let unsubscribe = store.subscribe(() =>
  console.log(store.getState())
);

// 通过消息分发消息到store来向购物车添加商品
store.dispatch(addToCart('Coffee 500gm',1,200));
store.dispatch(addToCart('Juice',2,200));
store.dispatch(addToCart('Flour',1,500));

unsubscribe();






