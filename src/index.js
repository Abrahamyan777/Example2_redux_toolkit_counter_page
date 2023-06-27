import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./store/store";

// const obj = {
//     id: 1,
//     name: 'Gagik',
//     age: 23
// }


// const proxyObj = new Proxy(obj , {
//     get: (target , property ,proxy) => {
//         for (let i = 0 ; i < Object.keys(target).length ; i++){
//             if (property === Object.keys(target)[i]){
//                 console.log(target)
//                 console.log(property)
//                 console.log(proxy)
//                 return target[property]
//             }else{
//                 console.error(`There is no property ${property} in your target` )
//             }
//         }
//     },
//     set: (target , property , value) => {
//         console.log('someone changed prpperty')
//         target[property] = value
//     }
// })
//
// proxyObj.age = 34


console.log(store)


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
