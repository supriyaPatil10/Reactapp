import logo from './logo.svg';
import './App.css';
import Home from "./Home"
import Navbar from "./Navbar"
import Signup from "./Signup"
import Login from "./Login"
import { useState } from 'react';
import Search from "./Search"
import CakeDetails from "./CakeDetails"
import { BrowserRouter as Router, Redirect, Route, Switch, } from "react-router-dom"
import axios from 'axios';
import { connect } from "react-redux";
import Cart from "./Cart"
import Checkout from "./Checkout"
import Shoppingcart from './Shoppingcart';

function App(props) {



  console.log("localStorage ", localStorage, props)

  if (localStorage.token && !props.user) {
    var token = localStorage.token
    let apiurl = "https://apibyashu.herokuapp.com/api/getuserdetails"
    axios({
      url: apiurl,
      method: "get",
      headers: { authtoken: token }
    }).then((response) => {

      console.log("getuserdetails api Response ", response.data)
      props.dispatch({
        type: "SETUSER",
        payload: response.data.data
      })
    }, (error) => {
      console.log("getuserdetails api Error", error)
      // setError("Invalid Login")
    }, [props.token])
  }




  // var [loginStatus,setloginStatus] = useState(false)
  // var [login,setLogin]=useState(false);
  // var [user,setUser]=useState()
  // var [loginstatus,setloginStatus]= useState(false)



  // function LoginDone(data){
  //   setUser(data)
  //  setloginStatus(true)
  // // alert("login commponent called parent")

  // }
  return (
    <div >

      <Router>
        {/* <Navbar user={user} loginstatus={loginstatus}></Navbar> */}
        <Navbar />

        <div >
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" exact  ><Login ></Login></Route>
            <Route path="/signup" exact component={Signup} />
            <Route path="/search" exact component={Search} />
            {/* { props.user ? */}
            <Route path="/cart" exact component={Cart} />
            {/* <Route path="/shoppingcart" exact component={Shoppingcart} /> */}
            <Route path="/checkout" component={Checkout} />
            {/* : ''
       } */}
            <Route path="/cake/:cakeid" exact component={CakeDetails} />
            <Route path="/*" />
            <Redirect to="/"></Redirect>
          </Switch>
        </div>
      </Router>

    </div>



  );
}

// export default connect(function(state,props){
// return{
// user:state?.user
// }

// }) (App);
export default connect()(App)
