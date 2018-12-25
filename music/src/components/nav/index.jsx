import React from "react";
import { NavLink } from 'react-router-dom'
class Nav extends React.Component {
    render() {
        return <div className="nav">
            <ul>
                <NavLink to='/index/recommon' activeClassName='active'>
                    推荐
                </NavLink>
                <NavLink to='/index/rank' activeClassName='active'>
                    排行榜
                </NavLink>
                <NavLink to='/index/search' activeClassName='active'>
                    搜索
                </NavLink>
            </ul>
        </div>
    }
}

export default Nav;















