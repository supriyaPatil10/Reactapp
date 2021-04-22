import { Link, useRouteMatch, Route } from "react-router-dom"
import CartSummary from "./CartSummary"
import Payment from "./Payment"
import Address from "./Address"
import Order from "./Order"
import "./index.css"

// import {with}from "route-redux"
import Cart from "./Cart"


function Checkout() {
    var route = useRouteMatch()
    console.log("....", route)
    var url = route.url
    var path = route.path
    return (
        <div className="row">

            <div className="col-4">

                <ul class="nav flex-column nav-customs" style={{ padding: "80px" }}>
                    <li class="nav-item " >
                        <Link to={url} > <a class="nav-link active" >Cart Summary</a></Link>
                    </li>
                    <li class="nav-item" >
                        <Link to={url + "/address"} >  <a class="nav-link" >Add Address</a></Link>
                    </li>
                    <li class="nav-item" >
                        <Link to={url + "/payment"} ><a class="nav-link" >Payment</a></Link>
                    </li>
                    <li class="nav-item" >
                        <Link to={url + "/order"} > <a class="nav-link " >Order details</a></Link>
                    </li>
                </ul>
                

            </div>
            <div className="col-8" style={{ padding: "40px" }}>
                <Route path={path} exact component={CartSummary} />
                <Route path={path + "/address"} exact component={Address} />
                <Route path={path + "/payment"} exact component={Payment} />
                <Route path={path + "/order"} exact component={Order} />



            </div>
        </div>
    )

}
export default Checkout