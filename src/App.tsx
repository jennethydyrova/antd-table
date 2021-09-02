import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "antd/dist/antd.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";
import Bills from "./components/Bills";
import PaymentMethods from "./components/PaymentMethods";
import Services from "./components/Services";
import Settings from "./components/Settings";

function App() {
  const { Footer, Content } = Layout;
  return (
    <div className="App">
      <Router>
        <Layout style={{ minHeight: "100vh" }}>
          <Sidebar />
          <Layout>
            <Content style={{ margin: "24px 16px 0" }}>
              <div className="site-layout-background">
                <Route exact path="/" component={Bills} />
                <Route
                  exact
                  path="/payment-methods"
                  component={PaymentMethods}
                />
                <Route exact path="/services" component={Services} />
                <Route exact path="/settings" component={Settings} />
              </div>
            </Content>
            <Footer style={{ textAlign: "center" }}>Foo</Footer>
          </Layout>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
