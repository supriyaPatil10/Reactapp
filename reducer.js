var demo= function(state={user:null},action){


    // * An *action* is a plain object that represents an intention to change the
 //* state. Actions are the only way to get data into the store.
 //* Actions must have a `type` field that indicates the type of action being* performed.
    switch(action.type){

      case "LOGIN":{
console.log("here login")
state={...state}
state["isloggin"]=true
state["user"]=action.payload

return state

      }

      case "SETUSER":{
        console.log("here initial user")
        state={...state}
        state["isloggin"]=true
        state["user"]=action.payload
        
        return state
        
              }
              case "UPDATE_CART":{
                state = {...state}
                state["updatecart"] = action.payload
                return state
            }
        
            case "CART":{
                state = {...state}
                state["cart"] = { data:action.payload}
                console.log("here we have to write logic for cart", state["cart"])
                return state
            }

      case "LOGOUT":{
        console.log("here logout")
        state={...state}
        localStorage.clear()
      delete state["user"]
         delete state["isloggin"]
      
        
        return state
        
              }
              case "SHOP_REMOVE_PRODUCT":{
                console.log("here remove item")
                state={...state}
                state["isloggin"]=true
                state["cakeid"]=action.payload
              delete state["cakeid"]
                 
              
                
                return state
                
                      }
              
default: return state
    }
}

export default demo