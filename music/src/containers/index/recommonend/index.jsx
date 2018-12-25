import React from "react";
import Carousels from "comp/carousel"
import axios from "axios"

const RadioList=(props)=>{
    const {item}=props
    return <dl>
        <dt>
            <img src={item.picUrl} alt=''/>
        </dt>
        <dd>
            {item.Ftitle}
        </dd>
    </dl>
}
class Recommend extends React.Component {
    constructor(props){
        super(props)
        this.state={
            productlist:[]
        }
    }
    componentDidMount(){
        axios.get('/productlist').then((res)=>{
            this.setState({
                productlist:res.data.collection.data
            })
        })
    }
    render() {
        const {productlist}=this.state
        return <div className="recommend">
            <Carousels productlist={productlist}/>
            <div className="radio">
                <p>电台</p>
                <div className='radio-menu'>
                {
                    productlist.radioList&& productlist.radioList.map((item,index)=>{
                        return <RadioList key={index} item={item} index={index}/>
                    })
                }
                </div>
            </div>
            <div className="song">
                <p>热门歌单</p>
                <div className='song-list'>
                    <ul>
                        <li>去客户端发现好的音乐></li>
                        <li>查看电脑版页面></li>
                    </ul>
                </div>
                <div className="song-logo">
				<i>
					<img src={require('../../../common/images/one.jpg')} alt=''/>
				</i>
				<h5>QQ音乐</h5>
			    </div>
            </div>
    	</div>
    }
}
export default Recommend;
