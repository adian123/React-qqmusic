import React from "react"
import RouterMap from "router/map"
import Routes from "router/routes"
class RouterView extends React.Component{
  render(){
    const routes=this.props.routes?this.props.routes:Routes
    return <div>
       <RouterMap routes={routes}/>
    </div>
  }
}
export default RouterView;
