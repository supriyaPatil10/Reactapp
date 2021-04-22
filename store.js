import {createStore} from "redux"
import demo from "./reducer"

var store= createStore(demo)

store.dispatch({

    type:"login"
})

console.log("", store.getState())


store.dispatch({

    type:"Login",
    payload:{email:"spriya.patil92@gmail.com",name:"supriya"}
})
// store.dispatch({

//     type:"Logout",
//     payload:{email:"spriya.patil92@gmail.com",name:"supriya"}
// })


// console.log("", store.getState())


export default store