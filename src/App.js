import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import logo from './logo.svg'

import { Layout, Menu } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Dashboard from './Components/Dashboard';
import CreateTodo from './Components/Create';
import Profile from './Components/Profile';

const { Header, Content, Footer, Sider } = Layout;

class App extends React.Component {
  state = {
    collapsed: false,
  };

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({ collapsed });
  };

  render() {
    return (
      <Router>
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo"><img src={logo} /></div>
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1">
              <PieChartOutlined />
              <Link to={`/`}><span>Dashboard</span></Link>
            </Menu.Item>
            <Menu.Item key="2">
              <DesktopOutlined />
              <Link to={`/create`}><span>Create Todo</span></Link>
            </Menu.Item>
            <Menu.Item key="3">
              <UserOutlined />
              <Link to={`/profile`}><span>Profile</span></Link>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Switch>
              <Route path="/" exact component={Dashboard} />
              <Route path="/create" component={CreateTodo} />
              <Route path="/profile" component={Profile} />
            </Switch>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018</Footer>
        </Layout>
      </Layout>
      </Router>
    );
  }
}

export default App;
