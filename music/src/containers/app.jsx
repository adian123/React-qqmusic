import React from "react";
import {BrowserRouter as Router} from "react-router-dom"
import Routerview from "router/index"
import Header from "comp/header";
import Layout from "comp/layout";
import Nav from "comp/nav/index"

class App extends React.Component {
    render() {
        return <div className="wraper">
            <Header></Header>
              <Layout>              
                <Router>  
                     <div className="section">
                        <Nav/>    
                        <Routerview/>    
                     </div>
                </Router>
              </Layout>                      
        </div>
    }
}
export default App;