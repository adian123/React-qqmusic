import React from "react"
import { Route ,Redirect} from "react-router-dom"
class RouterMap extends React.Component{
  render(){
    const {routes}=this.props
    const defaultRouter=<Route key={0} path='/' render={()=>{
      return <Redirect to='/index/recommon'/>
    }} exact/>
    return <div>
        {
          routes.length&&routes.map((item,index)=>{
            const {children:routes,component:Component}=item;
           if(Component){
            return <Route key={item.name} path={item.path} render={(api)=>{
                return <Component routes={routes} {...api}/>
            }}></Route>
           }
           return true;
          }).concat([defaultRouter])
        }
    </div>
  }
}
export default RouterMap;
