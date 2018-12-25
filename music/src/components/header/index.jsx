import React from "react";

class Header extends React.Component {
    render() {
        return <header className="header">
        	<div className="header-left">
				<i>
					<img src={require('../../common/images/one.jpg')} alt=''/>
				</i>
				<h5>QQ音乐</h5>
			</div>
			<div className="header-right">
				<p>下载APP</p>
			</div>
    	</header>
    }
}
export default Header;
