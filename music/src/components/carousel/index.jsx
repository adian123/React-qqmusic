import React from "react"
import {Carousel} from "antd"
import './carousel.css'
import 'antd/dist/antd.css'
class Carousels extends React.Component{
  render(){
    const {productlist}=this.props;
    return <div className="carousels">
         <Carousel autoplay>
           {
              productlist.slider&&productlist.slider.map((item,index)=>{
                return <dl key={index}>
                  <dt>
                    <img src={item.picUrl} alt=''/>
                  </dt>
                </dl>
              })
           }
         </Carousel>
    </div>
  }
}
export default Carousels;