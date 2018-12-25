import React from "react";
import ReactDOM from "react-dom";
import App from "view/app";
import {Provider} from "react-redux"
import store from "store"
import "common/css/bootstrap.min.css";
import "common/css/reset.css";
import "common/css/common.css";
import "common/css/style.css";
import "common/fonts/iconfont.css"
ReactDOM.render(
        <Provider store={store}>
            <App/>
        </Provider>,
    document.getElementById('root')
);