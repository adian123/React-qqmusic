import React from "react";
import axios from "axios"
import {Link} from "react-router-dom"

const SongList=(props)=>{
    const {item,index}=props;
    console.log(item.songList)
    return <Link to={{
        pathname:`/index/rankdetail/${item.topTitle}`,
        state:{
            id:123
        }
    }}>
    <dl className="rank-dl" key={index}>
    <dt>
        <img src={item.picUrl} alt=''/>
    </dt>
    <dd>
      <span className='rank-title'>{item.topTitle}</span>
      <ul>
          {
              item.songList&&item.songList.map((itm,ind)=>{
                  return <li key={ind}>
                       <i>
                        {itm.songname} 
                       </i>
                        -
                       <span>{itm.singername}</span>
                  </li>
              })
          }
      </ul>
    </dd>
    </dl>
    </Link>
}
class Rank extends React.Component {
    constructor(){
        super()
        this.state={
            rankinglist:[]
        }
    }
    componentDidMount(){
        axios.get('/rankinglist').then((res)=>{
           this.setState({
            rankinglist:res.data.collection.data
           })
        })
    }
    render() {
        const {rankinglist}=this.state;
        return <div className="rank">
          {
              rankinglist.topList&& rankinglist.topList.map((item,index)=>{
                 return <SongList key={index} item={item} index={index}/>
              })
          }
    	</div>
    }
}

export default Rank;
