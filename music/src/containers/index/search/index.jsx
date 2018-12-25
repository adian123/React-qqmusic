import React from "react";
import axios from "axios"
import {connect} from "react-redux"
class Search extends React.Component {
    constructor(){
        super()
        this.state={
            searchlist:[]
        }
    }
    componentDidMount(){
        const {update}=this.props;
        axios.get('/searchlist').then((res)=>{
            // this.setState({
            //     searchlist:res.data.collection.data
            // })
            update(res.data.collection.data)

        })
    }
    render() {
        //const {searchlist}=this.state;
        const {searchlist}=this.props
        console.log(searchlist)
        return <div className="search">
            <div className="search-bar">
                <output>
                     <i className="iconfont icon-fangdajing"></i>
                     <input type='search'placeholder='搜索歌曲、歌单、专辑'/>
                </output>
            </div>
            <div className="search-list">
               <p>热门搜索</p>
               <ul>
                   {
                      searchlist.hotkey&&searchlist.hotkey.map((item,index)=>{
                          return <li>
                              {item.k}
                          </li>
                      })
                   }
               </ul>
            </div>
    	</div>
    }
}
const mapStateToProps=(state)=>{
    return state.SearchReducer
}
const mapDispatchToProps=(dispatch)=>{
    return {
        update(payload){
            dispatch({
                type:"UPDATE",
                payload
            })
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Search);
