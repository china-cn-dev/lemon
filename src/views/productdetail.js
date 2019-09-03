import React from 'react'
import { NavLink,Route,Switch } from 'react-router-dom'
import '../css/productdetail.css'
export default class ProductDetail extends React.Component{
    constructor(props){
        super(props);
        console.log(this.props.match.params.id)
        this.state = {
            pid:this.props.match.params.id
        }
    }
    render(){
        return(
            <div className="product-detail">
                <header className="nav-bar">
                    <span className="back" onClick={()=>{this.props.history.goBack()}}></span>
                    <NavLink exact to={`/product/${this.state.pid}/details`}>产品</NavLink>
                    <NavLink to={`/product/${this.state.pid}/details/more`}>详情</NavLink>
                    <span className="more"></span>
                </header>
                <Switch>
                    <Route exact path="/product/:id/details" render={()=>(<div>dddddd</div>)}></Route>
                    <Route path="/product/:id/details/more" render={()=>(<div>mmmmm</div>)}></Route>
                </Switch>
            </div>
        )
    }
}
