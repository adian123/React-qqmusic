import Index from "view/index"
import Recommonend from "view/index/recommonend"
import Rank from "view/index/ranking"
import Search from "view/index/search"
import Detail from "view/index/detail"
const Routes = [
  {
    path:"/index",
    name:"主页",
    component:Index,
    children:[{
      path: "/index/recommon",
      name:"推荐",
      component: Recommonend,
    },
    { 
      path: "/index/rank",
      name:"排行榜",
      component: Rank
    },
    {
      path: "/index/rankdetail/:id",
      name:"详情",
      component: Detail
    }, 
    {
      path: "/index/search",
      name:"搜索",
      component: Search
    }]
  }
]

export default Routes;