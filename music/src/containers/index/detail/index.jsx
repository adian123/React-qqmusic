import React from "react"
class Detail extends React.Component{
  render(){
    console.log(this.props)
    const {match}=this.props
    return <div calssName='detail'>
      this is deatil
      {match.params.id}
    </div>
  }
}
export default Detail;