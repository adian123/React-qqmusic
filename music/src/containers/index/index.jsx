import React from "react"
import RouterView from "router/index"
class Index extends React.Component{
  render(){
     const {routes}=this.props;
    return <div>
       <RouterView routes={routes}/>
    </div>
  }
}
export default Index;